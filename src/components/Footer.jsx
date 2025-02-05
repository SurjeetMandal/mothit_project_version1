import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Footer = ({ marginTop }) => {
  return (
    <div className={`bg-[var(--secondary)] ${marginTop}`}>
      <div className="myContainer flex flex-col md:flex-row   max-w-[1640px] !mx-auto">
        <div className="md:w-[70%] lg:w-[50%]">
          <div className="!pt-20 flex items-center gap-2">
            <div className="w-3 h-3 bg-[var(--accent)] rounded-full">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-ping"></div>
            </div>
            <p className="text-white">Limited Spots Available - Act Now!</p>
          </div>

          <p className="!mt-6 text-4xl leading-tight text-white">
            Unlock your Trading Potential with Techack
          </p>
          <div className="w-full md:w-auto flex justify-center flex-col !mt-6 text-lg text-white">
            <p className="text-xl font-medium">Our Location</p>
            <p className="!mt-2 text-sm font-light">Address: L, 45, Bal Udhyan Rd, Prem Nagar, Block E, Param Puri, Uttam Nagar, New Delhi, Delhi, 110059</p>
            <iframe
            className="!mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.337432634074!2d77.0576148!3d28.6196473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05a952ade893%3A0xaebe6e40ab2fb32!2sTechack!5e0!3m2!1sen!2sin!4v1738749891939!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="md:w-[50%] flex flex-col items-start md:items-end justify-center text-white !mt-10">
        <p className="text-xl font-medium">Important Links</p>
          <Link
            to={"/about"}
            className="hover:text-blue-100 transition-all duration-100 !mt-4"
          >
            Learn About Us
          </Link>
          <Link
            to={"/service"}
            className="hover:text-blue-100 transition-all duration-100 !mt-2"
          >
            Explore Our Services
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-blue-100 transition-all duration-100 !mt-2"
          >
            Contact TecHack Support
          </Link>



          <p className="text-xl font-medium !mt-10">Social Links</p>
          <div className="flex gap-4">
            <Link
              to={"https://www.instagram.com/trade_with_techack/?igsh=emg5dmxldWdwMDdn"}
              className="hover:text-blue-100 transition-all duration-100 !mt-6"
            >
              <FaInstagram size={30}/>
            </Link>
            <Link
              to={"https://www.facebook.com/people/Trade-with-Techack/61554137112206/"}
              className="hover:text-blue-100 transition-all duration-100 !mt-6"
            >
              <FaFacebook size={30}/>
            </Link>
            <Link
              to={"https://wa.me/9355166193"}
              className="hover:text-blue-100 transition-all duration-100 !mt-6"
            >
              <FaWhatsapp size={30}/>
            </Link>
          </div>

          
        </div>
      </div>

      <div className="!pt-20 flex flex-col-reverse md:flex-row md:justify-between myContainer max-w-[1640px] !mx-auto">
        <div>
          <p className="text-white text-sm !mb-15">
            Copyright © 2021 Techack. All Rights Reserved.
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
