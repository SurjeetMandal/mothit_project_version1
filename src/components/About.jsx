import { Link } from "react-router-dom"
import about_img from "../assets/img/AboutUs Img.svg"

const About = () => {
  return (
    <>
      <div className="myContainer !mt-40 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-[50%] !p-6 md:shadow-md shadow-4xl z-40 md:left-5 relative bg-white md:bg-transparent md:backdrop-blur-xl md:backdrop-filter md:border-[var(--primary)] md:border-2 rounded-md">
          <p className="title text-4xl font-medium text-[var(--text_normal)]">
            About Us
          </p>
          <p className="description !mt-4 text-base text-[var(--text_normal)] w-[98%]">
            we providing best strategy in stock market option trading classes from scratch ..
            we providing best stock market intraday calls on our premium channel with proper analysis from our team with proper entry/exit time and price and proper stoploss
            we providing best demat account handling (PMS) in option trading on monthly basis upto 40% on your capital.
          </p>
          <Link to={"/about"}>
            <p className="read_more !mt-6 text-sm text-[var(--text_light)] cursor-pointer">
              Read more&nbsp; →
            </p>
          </Link>
        </div>
        <div className="w-full md:w-[50%] relative md:right-5">
          <img src={about_img} alt="" className="rounded-lg"/>
        </div>
      </div>
    </>
  )
}

export default About
