import services_img from "../assets/img/Hero star vector.svg"
import Button from "./Button";
import { motion } from "motion/react"

const servicesOffered = [
    {
        Title: "📚 Master the Art of Optional Trading - Online Course",
        AllPoints: `
            <li>Learn the <strong>fundamentals</strong> of Option Trading from scratch.</li>
            <li>Covers strategies like <strong>scalping hedging strategy</strong></li>
            <li>Access <strong>live sessions and pre-recorded</strong> videos for flexible learning</li>
            <li>Perfect for beginners and advanced traders <strong>seeking profitable</strong> insigths.</li>
            <li><strong>24/7</strong> Telegram Suppport for discussions and queries.</li>
        `,
        CTA: "📑 Download Borchure - Start Your Trading Journey!",
        CTA_Link: "/course",
        CTA2: "Know more",
        CTA_Link2: "/contact2"
    },
    {
        Title: "📈 Real-Time Option Trading Signals for Maximum Profits",
        AllPoints: `
            <li><strong>Real-time buy & sell signals</strong> for NIFTY, BANKNIFTY, and other stock options.</li>
            <li>Expert analysis to <strong>maximize profits & minimize risks</strong>.</li>
            <li><strong>Intraday and Swing Trading Calls</strong> with detailed insights.</li>
            <li>Join exclusive <strong>Telegram group</strong> for chart, update and tips.</li>
        `,
        CTA: "🚨 Get Real-Time Sigmals - Know More",
        CTA_Link: "/calls",
        CTA2: "Know more",
        CTA_Link2: "/premiumTelegram"
    },
    {
        Title: "💼 Personalized Portfolio Management for Wealth Growth",
        AllPoints: `
            <li>Customized <strong>investment strategies</strong> aligned with you financial goals</li>
            <li>Diversified portfolio planning for <strong>long-term wealth creation</strong>.</li>
            <li><strong>Expertise</strong> in hedging and risk management for consistent returns.</li>
            <li>Stay updated via Telegram with <strong>reports and recommendations</strong></li>
        `,
        CTA: "🌟 Boost Your Portfolio - Learn More Now!",
        CTA_Link: "/portfolio",
        CTA2: "Know more",
        CTA_Link2: "/contactPortfolio"
    }
];


// eslint-disable-next-line react/prop-types
const Services = ({paddingTop}) => {

  return (
    <>
      <motion.div className={`myContainer ${paddingTop} flex flex-col items-center`}
        viewport={{once:true}}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.2, duration:0.4}}  
      >
        <img src={services_img} alt="" className="w-15"/>
        <p className="heading2 text-center leading-11 md:leading-16 !mt-3 max-w-[1440px]">
            Comprehensive Financial Services to Boost Your Portfolio
        </p>
        <p className="short_description2 text-center !mt-3">
            Explore Our Premium Services - Designed for Financial Growth and Wealth Creation.
        </p>
      </motion.div>

      <motion.div className="myContainer flex gap-10 2xl:gap-20 flex-wrap justify-center !mt-15 items-start"
        viewport={{once:true}}
        initial={{y:90, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.4, duration:0.4}}  
      >
        {
            servicesOffered.map((item, index)=>(
                <div key={index} className="w-full md:w-[300px] 2xl:w-[380px] bg-white !p-4 shadow-xl rounded-lg border-gray-300 border-2">
                    <p className="text-2xl 2xl:text-4xl text-[var(--text_normal)] font-semibold">{item.Title}</p>
                    <ul dangerouslySetInnerHTML={{ __html: item.AllPoints }} className="!mt-4 list-disc 2xl:text-xl list-inside !mb-6"></ul>
                    <Button Btn_text={item.CTA} Btn_type={""} href={item.CTA_Link2} additional_class={"text-sm !bg-green-600 !py-3.5 md:!py-2 2xl:!py-3.5"}></Button>
                    {
                      item.CTA2 === "" ?
                        <div></div>
                      :
                        <Button Btn_text={item.CTA2} Btn_type={"primary"} href={item.CTA_Link} additional_class={"!mt-2 !text-sm !font-medium"}></Button>

                    }
                </div>
            ))
        }
      </motion.div>
    </>
  )
}

export default Services
