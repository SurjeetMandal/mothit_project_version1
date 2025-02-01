import offering_img from "../assets/img/How it work vector.svg"
import { motion } from "motion/react"

const HowItWOrkArray = [
    {
        Title: '✅ 1. Learn & Master Option Trading',
        Description: ' Join our expert-led classes from scratch. Understand proven strategies for consistent profits. '
    },
    {
        Title: '✅ 2. Get Premium Intraday Calls',
        Description: 'Access our exclusive Telegram channel for daily calls. Get precise entry, exit, and stop-loss recommendations.'
    },
    {
        Title: '✅ 3. Start Portfolio Management (PMS)',
        Description: 'Let our experts handle your Demat account. Earn up to 40% returns on your capital monthly.'
    },
]

const HowItWork = () => {
  return (
    <div>
      <>
      <motion.div className="myContainer !mt-40 flex flex-col items-center"
        initial={{y: 80, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.4}}
        viewport={{once: true}}
      >
        <img src={offering_img} alt="" />
        <p className="heading2">
            How It Work&apos;s
        </p>
        <p className="short_description2 text-center">
            Everything you need to know before starting you Journey.
        </p>
      </motion.div>

      <div className="myContainer">
        <motion.div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15"
          initial={{y: 80, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5,}}
          viewport={{once: true}}
        >
            {
                HowItWOrkArray.map((item,index)=>(
                    <motion.div key={index} className="bg-white min-w-[300px] md:w-[300px] !p-4 custom-dotted-border rounded-md"
                      whileHover={{rotate:2}}
                      whileTap={{rotate:2}}
                    >
                        <p className="text-xl text-[var(--text_normal)] font-medium">{item.Title}</p>
                        <p className="text-sm !mt-2 text-[var(--text_normal)]">{item.Description}</p>
                    </motion.div>
                ))
            }
        </motion.div>
      </div>
    </>
    </div>
  )
}

export default HowItWork
