import { Link } from "react-router-dom"
import Arrow from "../assets/img/Arrow Down Right Sm.svg"

// eslint-disable-next-line react/prop-types
const Footer = ({marginTop}) => {
  return (
    <div className={`bg-[var(--secondary)] ${marginTop}`}>

      <div className="myContainer flex flex-col md:flex-row">

        <div className="md:w-[70%] lg:w-[50%]">
          <div className="!pt-20 flex items-center gap-2">
            <div className="w-3 h-3 bg-[var(--accent)] rounded-full"></div>
            <p className="text-white">Join Us Now</p>
          </div>

          <p className="!mt-10 text-4xl leading-tight text-white">
              Trade with Tech Hack: Learn option trading, get expert intraday calls, and maximize returns with professional PMS services.
          </p>

          <div className="!mt-10">
          <Link to="/calls">
            <button className="text-white cursor-pointer border-[var(--accent)] border-2 !py-3 !px-6 rounded-md flex gap-5 items-center">
              Join Telegram Now
              <img src={Arrow} alt="" className="w-3"/>
            </button>
          </Link>
          </div>
        </div>

        <div className="md:w-[50%] flex flex-col items-start md:items-end justify-center gap-5 text-white !mt-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

      </div>

      <div className="!pt-20 flex flex-col-reverse md:flex-row md:justify-between myContainer">
        <div>
          <p className="text-white text-sm !mb-15">Copyright 2025 ©  All rights reserved To TechHack</p>
        </div>
        <div>
          <div className="text-white">
            <div className="flex items-center gap-1 text-sm md:!mb-15">
              facebook 
              <img src={Arrow} alt="" className="w-2"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
