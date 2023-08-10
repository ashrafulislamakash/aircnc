import React, { useContext, useState } from "react";

import Calender from "./Calender";
import Button from "../Button/Button";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";

import { formatDistance } from "date-fns";
import { addBooking } from "../../api/bookings";
const RoomReservation = ({ roomData }) => {
  // Price Calculation
  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * roomData.price;

  const closeModal = () => {
    setIsOpen(false);
  };

  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  // Booking state
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.host.email,
    location: roomData.location,
    price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: roomData.title,
    roomId: roomData._id,
    image: roomData.image,
  });

  const modalHandler = () => {
    addBooking(bookingInfo)
      .then((data) => {
        console.log(data);
        updateStatus(roomData._id, true)
          .then((data) => {
            console.log(data);
            toast.success("Booking Successful!");
            // navigate("/dashboard/my-bookings");
            closeModal();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden ">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold"> ${roomData.price} </div>
        <div className="font-light text-neutral-600 ">night </div>
      </div>

      <div className="flex justify-center">
        <Calender handleSelect={handleSelect} value={value}></Calender>
      </div>

      <hr />

      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user.email}
          label="Reserved"
        >
          {" "}
        </Button>
      </div>

      <hr />

      <div className="p-4 flex flex-rom items-center justify-between font-semibold text-lg">
        <div>Total</div>

        <div>${totalPrice}</div>
      </div>

      {/* booking Modal */}
      <BookingModal
        modalHandler={modalHandler}
        bookingInfo={bookingInfo}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default RoomReservation;
