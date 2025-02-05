import offering_img from "../assets/img/How it work vector.svg"
import { motion } from "motion/react"

const offering = [
    {
        Title: '✅ Live Trading Calls',
        Description: 'Get real-time trading signals for high-accuracy entries & exits.'
    },
    {
        Title: '✅ Daily Market Analysis',
        Description: 'Stay ahead with expert insigths, charts, and trend analysis.'
    },
    {
        Title: '✅ Proven Strategies',
        Description: 'Use back-tested trading methods to enhance profitability.'
    },
    {
        Title: '✅ Free Learning Resources',
        Description: 'Access e-books, webinars and trading tutorials and many more.'
    },
    {
        Title: '✅ Expert Guidance',
        Description: ' Get mentorship from top traders to refine your strategy.'
    }
]

const Offering = () => {
  return (
    <>
      <motion.div className="myContainer !mt-40 flex flex-col items-center max-w-[1440px] !mx-auto"
        viewport={{once:true}}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}}  
      >
        <img src={offering_img} alt="" />
        <p className="heading2 text-center leading-11 md:leading-normal !mt-2 md:!mt-0">
            Maximize Your Trading Profits
        </p>
        <p className="short_description2 !mt-3 md:!mt-0">
            All the thing&apos;s we promise you.
        </p>
      </motion.div>

      <motion.div className="myContainer max-w-[1440px] !mx-auto"
        viewport={{once:true}}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}}  
      >
        <div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15">
            {
                offering.map((item,index)=>(
                    <motion.div key={index} className="bg-white min-w-[300px] md:w-[300px] !p-4 custom-dotted-border rounded-md"
                      whileHover={{rotate:2}}
                      whileTap={{rotate:2}}
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

export default Offering
