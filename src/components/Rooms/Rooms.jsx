import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import Heading from "../Heading/Heading";
=======
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

<<<<<<< HEAD
  console.log(category);

=======
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);
=======
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
<<<<<<< HEAD
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {rooms.map((room, index) => (
            <Card key={index} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Rooms Avaiable in this Category"
            subtitle="Please Select Other Categories"
            center={true}
          ></Heading>
        </div>
      )}
=======
      <div className="pt-12 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {rooms.map((room, index) => (
          <Card key={index} room={room} />
        ))}
      </div>
>>>>>>> 33047fd8f346dfe0a275d03a9fa5a4bcf8151d8b
    </Container>
  );
};

export default Rooms;
