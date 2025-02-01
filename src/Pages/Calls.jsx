import Button from "../components/Button"
import callImg from "../assets/img/Calls.svg"
import WhyJoin from "../components/WhyJoin";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "motion/react"

const SubscriptionPrize = [
  {
    title: "✅ 1 Month: ₹2,999 ❌ ₹999 ✅"
  },
  {
    title: "✅ 2 Months: ₹4,999 ❌ ₹1,499 ✅"
  },
  {
    title: "✅ 3 Months: ₹6,999 ❌ ₹2,499 ✅"
  },
  {
    title: "✅ 6 Months: ₹17,999 ❌ ₹3,999 ✅"
  },
  {
    title: "✅ 12 Months: ₹35,999 ❌ ₹5,599 ✅"
  },
]

const Calls = () => {
  return (
    <>
    <NavBar LinkColor={"text-black"}/>

    <div className="myContainer flex justify-center !pt-10 md:!pt-20 flex-col">
      <p className="heading text-center text-3xl md:text-5xl text-[var(--text_normal)] font-semibold md:!mt-10"
      >
        TECHACK PREMIUM SUBSCRIPTION 🎉🔥
      </p>

      <div className="!mt-20 flex flex-col md:flex-row gap-5">
        <motion.img src={callImg} alt="" className="md:w-[50%] lg:w-[40%]"
          viewport={{once:true}}
          initial={{x:-90, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{ duration:0.4}}  
        />
        <motion.div className="md:w-[50%] lg:w-[60%]"
          viewport={{once:true}}
          initial={{x:90, opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{ duration:0.4}}
        >
          <p className="text-2xl font-medium text-[var(--text_normal)] text-center md:text-start">Limited-time special offer - Elevate your trading journey at the best price ever!</p>
          <div className="flex flex-wrap gap-2 !mt-10 !mb-15">
          {
            SubscriptionPrize.map((item, index)=>(
              <div key={index} className="!p-4 bg-white shadow-2xl border-gray-300 rounded-md border-2 lg:w-[48%] w-full flex justify-center">
                <p>{item.title}</p>
              </div>
            ))
          }
          </div>
          <Button Btn_type={"primary"} Btn_text={"Book You Subscription Now"} additional_class={"w-full"}></Button>
        </motion.div>
      </div>
    </div>

    <WhyJoin />

    <motion.div className="myContainer flex flex-col items-center text-center !mt-40 !py-20"
      viewport={{once:true}}
      initial={{y:90, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{ duration:0.4}}  
    >
      <p className="text-3xl md:text-5xl font-semibold text-[var(--text_normal)]">
        📲 Get Started Now!
      </p>
      <p className="!mt-4 text-lg md:text-xl text-[var(--text_normal)]">
        Join our Premium Channel Today and ride the market waves! 🌊📊
      </p>
      <Button href={"https://wa.me/9355166193"} Btn_text={"📞 WhatsApp Now"} Btn_type={"secondary"} additional_class={"!mt-6"}></Button>
    </motion.div>

    <Footer marginTop={"!mt-40"} />
    </>
  );
};

export default Calls;

