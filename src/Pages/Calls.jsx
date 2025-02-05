import Button from "../components/Button"
import callImg from "../assets/img/Calls.svg"
import WhyJoin from "../components/WhyJoin";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "motion/react"
import FAQs from "../components/Faq"

const SubscriptionPrize = [
  {
    title: "✅ 1 Month: ₹2,999 ❌ ₹999 ✅",
    para: "Perfect for beginners to explore premium features."
  },
  {
    title: "✅ 2 Months: ₹4,999 ❌ ₹1,499 ✅",
    para: "Get started with comprehensive trading insights."
  },
  {
    title: "✅ 3 Months: ₹6,999 ❌ ₹2,499 ✅",
    para: "Ideal for intermediate traders aiming for consistent growth."
  },
  {
    title: "✅ 6 Months: ₹17,999 ❌ ₹3,999 ✅",
    para: 'Advance plan with maximum value for long-term traders'
  },
  {
    title: "✅ 12 Months: ₹35,999 ❌ ₹5,599 ✅",
    para: "Best value for professionals seeking premium trading strategies."
  },
]

const FAQ = [
  {
      question: "What is Techack Premium Channel?  ",
      answer: "→ Techack Premium Channel provides exclusive, high-accuracy trading calls for options and equity markets. Our team of experts delivers daily actionable insights with proven strategies designed to maximize your profits."
  },
  {
      question: "What is included in the Premium Subscription?",
      answer: "→ As a premium subscriber, you will receive:  - 5-6 High-Accuracy Option Calls per day with 90% accuracy  - 2-3 Equity Calls per day for additional profit opportunities  - Expert analysis and real-time trade updates  - Proven trading strategies designed for consistent profits"
  },
  {
      question: "What is the pricing for the Premium Subscription?",
      answer: "→ We offer the following subscription plans:  - 1 Month: ~₹2,999~ ₹999  - 2 Months: ~₹4,999~ ₹1,499  - 3 Months: ~₹6,999~ ₹2,499  - 6 Months: ~₹17,999~ ₹3,999  - 12 Months: ~₹35,999~ ₹5,599  "
  },
  {
      question: "What is the accuracy of the trading calls provided? ",
      answer: "→ Our calls have an impressive 90% accuracy rate, based on expert analysis and years of market experience."
  },
  {
      question: "How will I receive the trading calls?  ",
      answer: "→ You will receive the trading calls through our exclusive Telegram Premium Channel, where our experts share real-time trade updates and analysis. "
  },
  {
      question: "Can I try the service before committing to a longer plan?",
      answer: "→ Yes, you can follow our free trades on the Techack channel to get a feel for the quality of our calls. If you are satisfied with the results, you can then opt for a premium subscription to access exclusive, high-accuracy trading calls and expert analysis."
  },
  {
      question: "How do I subscribe to the Premium Channel?",
      answer: "→ Simply DM us for payment details and join our Premium Channel. You can also reach out to us via WhatsApp for faster assistance: WhatsApp Now - 9355166193"
  },
  {
      question: " Is there any support available if I have queries about the calls or strategies? ",
      answer: "→ Yes, our team is always available to assist you with any questions or concerns about the calls, strategies, or market conditions."
  },
  {
      question: "Can I upgrade my plan later? ",
      answer: "→ Absolutely! You can upgrade your subscription at any time for more trading calls and additional benefits."
  },
];

const Calls = () => {
  return (
    <>
    <NavBar LinkColor={"text-black"}/>

    <div className="myContainer flex justify-center !pt-10 md:!pt-20 flex-col">
      <p className="heading text-center text-3xl md:text-5xl text-[var(--text_normal)] font-semibold md:!mt-10 max-w-[1440px] mx-auto"
      >
         Techack Premium Subscription Plans - Maximize Your Trading Potential Today!🎉🔥
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
          <p className="text-2xl font-medium text-[var(--text_normal)] text-center md:text-start">Exclusive Trading Plans at Unbeatable Prices - Start Your Success journey at the best price ever!</p>
          <div className="flex flex-wrap gap-2 !mt-10 !mb-15">
          {
            SubscriptionPrize.map((item, index)=>(
              <div key={index} className="!p-4 bg-white shadow-2xl border-gray-300 rounded-md border-2 lg:w-[48%] w-full flex flex-col justify-center">
                <p>{item.title}</p>
                <p className="!mt-2 text-sm text-zinc-500">{item.para}</p>
              </div>
            ))
          }
          </div>
          <Button Btn_type={"primary"} href={'/premiumTelegram'} Btn_text={"Subscribe Now and Transform Your Trading Journey 👌"} additional_class={"w-full"}></Button>
        </motion.div>
      </div>
    </div>

    <WhyJoin />

    <FAQs FAQ={FAQ} />

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

