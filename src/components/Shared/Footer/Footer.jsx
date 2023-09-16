import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logowhite from "../../../assets/logo-white.svg";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className=" bg-slate-800 relative bottom-0 left-0">
      <div className=" bg-dark1 ">
        <Container>
          <div className=" grid  gap-6 md:gap-32 sm:grid-cols-2 md:grid-cols-4 mx-auto  py-12 sm:py-24 ">
            <div className="  text-white ">
              <img className="pb-8 w-40" src={logowhite} alt="logowhite" />

              <p>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </div>

            <div className="  text-white ">
              <h4 className="font-bold text-xl mb-4">Company Info</h4>
              <div className="py-4">
                {" "}
                <p className="cursor-pointer hover:text-green-500">Home</p>
                <p className="cursor-pointer hover:text-green-500">About Us</p>
                <p className="cursor-pointer hover:text-green-500">
                  Community blog
                </p>
                <p className="cursor-pointer hover:text-green-500">Rentals</p>
                <p className="cursor-pointer hover:text-green-500">Contact</p>
              </div>
            </div>

            <div className=" text-white ">
              <h4 className="font-bold text-xl mb-4"> Contact US</h4>
              <div className="py-4">
                <p>Uttara, Dhaka, Bangladesh</p>
                <p>+88 123456789</p>
                <p>summerzone@gmail.com</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>

            <div className="   text-white">
              <h4 className="font-bold text-xl">Follow US</h4>

              <div className="py-4">
                <p className="py-4 ">Join us on social media</p>
                <div className="flex gap-4 mx-auto">
                  <a href="#" className=" hover:text-green-500">
                    <FaFacebookF></FaFacebookF>
                  </a>
                  <a href="#" className=" hover:text-green-500">
                    <FaInstagram></FaInstagram>
                  </a>
                  <a href="#" className=" hover:text-green-500">
                    <FaTwitter></FaTwitter>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-900">
        <Container>
          <div className=" mx-auto grid md:grid-cols-2 md:text-start  text-center  justify-between py-4 text-white">
            <p> Copyright © 2023 Vantures Home . All rights reserved.</p>
            <div className="flex gap-3 ">
              <a className=" hover:text-green-500 " href="">
                Terms and Conditions
              </a>
              <a className=" hover:text-green-500" href="">
                Privacy Policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
