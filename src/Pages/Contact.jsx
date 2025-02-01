import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import contact1 from "../assets/img/contact1.svg";
import contact3 from "../assets/img/contact3.svg";
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div>
        <NavBar LinkColor={"text-black"}/>

        <div className="myContainer !pt-20 md:!pt-40 flex item-center flex-col">
          <motion.p className="text-5xl text-[var(--text_normal)] font-semibold text-center"
            initial={{y: 80, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.4}}
          >
            Get in touch.
          </motion.p>

          <div className="myContainer !pt-10 md:!pt-20 ">

            <motion.div className="bg-[#FFDDDA] !p-6 w-full rounded-md flex flex-col md:flex-row gap-10"
              initial={{y: 80, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.6}}
              viewport={{once: true}}
            >

              <div className="md:w-[50%]">
                <p className="text-3xl text-[var(--text_normal)]">Drop Us a message</p>
                <p className="text-[var(--text_normal)]">We will get back to you as soon as possible.</p>
                <input type="text" className="bg-white !p-2 rouded-md !mt-6 w-full rounded-sm" placeholder="Full Name" />
                <input type="email" className="bg-white !p-2 rouded-md !mt-4 w-full rounded-sm" placeholder="Email" />
                <input type="text" className="bg-white !p-2 rouded-md !mt-4 w-full rounded-sm" placeholder="Subject" />
                <textarea name="" id="" placeholder="Write Your Message Here" className="bg-white !p-2 !mt-4 w-full rounded-sm h-30"></textarea>
                <motion.button className="bg-[var(--accent)] cursor-pointer !px-6 !py-2 rounded-sm text-white w-full !mt-6"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  viewport={{once: true}}
                >Submit Your Message</motion.button>
              </div>

              <div className="md:w-[40%]">

                <div className="flex items-center gap-3 text-[var(--text_normal)] !mt-0 md:!mt-22">
                  <img src={contact1} alt="" />
                  <p>+91 1023456789</p>
                </div>
                <div className="flex items-center gap-3 text-[var(--text_normal)] !mt-4">
                  <img src={contact3} alt="" />
                  <p>example45@example.com</p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        <Footer marginTop={"!mt-40"} />
    </div>
  )
}

export default Contact
