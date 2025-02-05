import { Link } from "react-router-dom"
import about_img from "../assets/img/AboutUs Img.svg"
import { motion } from "motion/react"

const About = () => {
  return (
    <>
      <motion.div className="myContainer !mt-40 flex flex-col-reverse md:flex-row items-center max-w-[1440px] !mx-auto"
        viewport={{once:true}}
        initial={{y:90, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}}  
      >
        <div className="w-full md:w-[50%] !p-6 md:shadow-md shadow-4xl z-40 md:left-5 relative bg-white md:bg-transparent md:backdrop-blur-xl md:backdrop-filter md:border-[var(--primary)] md:border-2 rounded-md">
          <p className="title text-4xl font-medium text-[var(--text_normal)]">
            About Us - Empowering Your Trading Journey
          </p>
          <p className="description !mt-4 text-base text-[var(--text_normal)] w-[98%]">
            At trade with Techack, we provide top-tier stock market and options trading education from scratch. Here&apos;s what makes us your trusted partner in trading success:<br/>
            <p className="!mt-3 description text-base text-[var(--text_normal)] w-[98%]">
              👉 Advanced intraday stock market strategies.<br/>
              👉 Expert-guided premium channel updates with actionable entry/exit points and stop-loss strategies.<br/>
              👉 Personalized Portfolio Management Services (PMS) ensuring up to 40% monthly returns on your capital.<br/>
              👉 Join us today to unlock your trading potential with proven methods and expert guidance!
            </p>
          </p>
          <Link to={"/about"}>
            <p className="read_more !mt-8 text-sm text-[var(--text_light)] cursor-pointer">
              Read more&nbsp; →
            </p>
          </Link>
        </div>
        <div className="w-full md:w-[50%] relative md:right-5">
          <img src={about_img} alt="" className="rounded-lg"/>
        </div>
      </motion.div>

      <p className="!mt-8 text-lg myContainer text-center text-zinc-500 font-light">Your 💪 Success Starts with the Right Team!</p>
    </>
  )
}

export default About
