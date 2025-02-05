import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import aboutImg from "../assets/img/AboutMeImg.svg";
import Button from "../components/Button";
import { motion } from "motion/react";
import Testimonials from "../components/Testimonials"

const About = () => {
  return (
    <div className="">
      <NavBar LinkColor={"text-black"} />

      <div className="w-full flex justify-center">
        <div className="myContainer 2xl:!pr-0 2xl:!pl-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:!pt-30 !pt-10 max-w-[1440px] mx-auto">
          <motion.div
            className="w-full md:w-[60%] text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <p className="text-4xl md:text-5xl font-extrabold text-[var(--text_normal)] !mb-6 text-start">
              🚀 Discover Techack Premimum - Your Ultimate Trading Partner
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 !mb-6 text-start">
              Techack Premium empowers traders with cutting-edge strategies, precise market insights, and high-quality trading signals to help you achieve consistent growth.
            </p>

            {/* Key Features */}
            <div className="bg-white !p-3 rounded-xl border-2 border-gray-300 w-full !mb-6 text-start">
              <ul className="text-sm space-y-4 text-gray-800">
                <li className="!mt-1">
                  ✔ <strong>Expert-Led Trading Strategies</strong> - Master proven techniques for consistent profits.
                </li>
                <li className="!mt-1">
                  ✔ <strong>High-Accuracy Trading Signals</strong> - Achieve unmatched precision in stock and options trading calls.
                </li>
                <li className="!mt-1">
                  ✔ <strong>Portfolio Management Services (PMS)</strong> – Boost your returns by up to{" "}
                  <span className="font-bold text-green-500">
                    40X with personalized strategies
                  </span>
                  .
                </li>
                <li className="!mt-1">
                  ✔ <strong>Exclusive Trading Community</strong> - Join a network experts with real-time updates and guidance.
                </li>
                <li className="!mt-1">
                  ✔ <strong>Risk-Managed Investments</strong> - Protect your capital while maximizing growth potential
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <p className="text-xl font-semibold text-[var(--text_normal)] !mb-4">
              📢 Unlock Your Trading Potential - Join Techack Premium Now!
            </p>

            {/* Contact Information */}
            <div className="flex gap-4 flex-col md:flex-row">
              <Button
                Btn_type={"primary"}
                Btn_text={"📩 Get Trading Signal on Telegram"}
                additional_class={"text-base"}
                href={"/calls"}
              ></Button>
              <Button
                Btn_type={"secondary"}
                Btn_text={"📲 Chat with Experts on WhatsApp"}
                additional_class={"w-full !text-base"}
                href={
                  "https://api.whatsapp.com/send/?phone=9355166193&text&type=phone_number&app_absent=0"
                }
              ></Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-[40%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="Stock Market Trading"
              className="w-full md:h-[500px] h-[300px]"
            />
          </motion.div>
        </div>
      </div>

      <Testimonials/>

      <Footer marginTop={"!mt-40"} />
    </div>
  );
};

export default About;
