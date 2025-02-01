import offering_img from "../assets/img/How it work vector.svg"
import { motion } from "motion/react"

const WhyJoinArray = [
    {
        Title: '✅ Daily 5-6 High-Accuracy Option Calls (90% Accuracy) 📈',
    },
    {
        Title: '✅ Exclusive 2-3 Equity Calls for Maximum Gains! 🚀',
    },
    {
        Title: '✅ Proven Strategies✅ Expert Analysis & Real-Time Trade Updates! 🎯',
    },
    {
        Title: '✅ Proven Strategies for Consistent Profits! 💰',
    },
]

const WhyJoin = () => {
  return (
    <>
      <motion.div className="myContainer !mt-40 flex flex-col items-center"
        viewport={{once:true}}
        initial={{y:90, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.4, duration:0.4}}  
      >
        <img src={offering_img} alt="" />
        <p className="heading2 text-center leading-10 !mt-5 !mb-2">
            Why Join Techack Premium?
        </p>
        <p className="short_description2 text-center !mt-2">
            Exclusive Benefits for Premium Members 
        </p>
      </motion.div>

      <motion.div className="myContainer"
        viewport={{once:true}}
        initial={{y:90, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}}  
      >
        <div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15">
            {
                WhyJoinArray.map((item,index)=>(
                    <motion.div key={index} className="bg-white min-w-[300px] md:w-[300px] !p-4 custom-dotted-border rounded-md"
                        whileHover={{scale:1.05}}
                        whileTap={{scale:1.05}}
                    >
                        <p className="text-xl text-[var(--text_normal)] font-medium">{item.Title}</p>
                        <p className="text-sm !mt-2 text-[var(--text_normal)]">{item.Description}</p>
                    </motion.div>
                ))
            }
        </div>
      </motion.div>
    </>
  )
}

export default WhyJoin