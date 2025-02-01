import { Link } from "react-router-dom"
import Arrow from "../assets/img/Arrow Down Right Sm.svg"

// eslint-disable-next-line react/prop-types
const Footer = ({marginTop}) => {
  return (
    <div className={`bg-[var(--secondary)] ${marginTop}`}>

      <div className="myContainer flex flex-col md:flex-row">

        <div className="md:w-[70%] lg:w-[50%]">
          <div className="!pt-20 flex items-center gap-2">
            <div className="w-3 h-3 bg-[var(--accent)] rounded-full">
            <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-ping">

            </div>
            </div>
            <p className="text-white">Join Us Now</p>
          </div>

          <p className="!mt-10 text-4xl leading-tight text-white">
              Trade with Tech Hack: Learn option trading, get expert intraday calls, and maximize returns with professional PMS services.
          </p>

          <div className="!mt-10">
          <Link to="/calls">
          <button 
          className="text-white relative cursor-pointer 
          border-[var(--accent)] border-2 !py-3 !px-6 rounded-md 
          flex gap-5 items-center group/hover hover:bg-[var(--accent)]"
          >
            Join Telegram Now
            <div className="size-5 overflow-hidden">
              <div className="h-5 flex gap-2 w-10 group-hover/hover:-translate-x-1/2 transition-transform duration-300">
                <img src={Arrow} alt="" className="w-3"/>
                <img src={Arrow} alt="" className="w-3"/>
              </div>
            </div>
          </button>

          </Link>
          </div>
        </div>

        <div className="md:w-[50%] flex flex-col items-start md:items-end justify-center gap-5 text-white !mt-10">
          <Link to={"/"} className="hover:text-blue-100 transition-all duration-100">Home</Link>
          <Link to={"/about"} className="hover:text-blue-100 transition-all duration-100">About Us</Link>
          <Link to={"/service"} className="hover:text-blue-100 transition-all duration-100">Services</Link>
          <Link to={"/contact"} className="hover:text-blue-100 transition-all duration-100">Contact</Link>
        </div>

      </div>

      <div className="!pt-20 flex flex-col-reverse md:flex-row md:justify-between myContainer">
        <div>
          <p className="text-white text-sm !mb-15">Copyright 2025 ©  All rights reserved To TechHack</p>
        </div>
        <div>
          <div className="text-white">
            <div className="flex items-center gap-1 text-sm md:!mb-15 cursor-pointer group/hover">
              facebook 
              <div className="size-2 overflow-hidden">
                <div className="flex gap-2 h-2 w-8 group-hover/hover:-translate-x-1/2 transition-transform duration-300">
                  <img src={Arrow} alt="" className="w-2"/>
                  <img src={Arrow} alt="" className="w-2"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
