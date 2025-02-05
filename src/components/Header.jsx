import Hero_img from "../assets/img/lg_hero_img.svg"
import trustPilot from "../assets/img/Hero trust vector.svg"
import Hero_img_mobile from "../assets/img/mobile_hero.svg"
import Button from "./Button"
import { motion } from "motion/react"

const Header = () => {
    return(
        <>
            <div className="w-full md:flex hidden scroll-x-0 overflow-hidden 2xl:h-screen max-w-[1440px] !mx-auto">
                <div className="left_half w-[60%] h-screen 2xl:h-full flex flex-col justify-center">
                    <div className="myContainer !mt-20 !pr-0">
                        <div className="heading">
                            <motion.p className="lg:text-6xl md:text-4xl font-semibold text-[var(--text_normal)] !mt-5"
                                initial={{y:50, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:0.2}}
                            >
                                🚀 Master Futures & <span className="text-[var(--secondary)]">Options Trading</span> for Garanteed <span className="text-[var(--secondary)]">Growth!</span>
                            </motion.p>
                            <h1 className="hidden">#tradewithtechack #trade_with_techack #techack #trading #option_trading #stock_market #share_market #f&o #swingTrading #stock_trader #learning #bestTradingInstitute #trading_center</h1>
                        </div>
                        <div className="description">
                            <motion.p className="!pt-6 w-[80%] md:text-xs lg:text-base text-[var(--text_normal)]"
                                initial={{y:50, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:0.4}}
                            >
                                🔍 Unlock the Secrets to Successful Futures & Options Trading! Join our thriving community of experts to access exclusive trading strategies, daily market updates, and hands-on guidance for financial success.
                            </motion.p>
                        </div>
                        <motion.div className="button_container flex gap-4 !pt-6"
                            initial={{y:50, opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{delay:0.6}}
                        >
                            <Button Btn_type={"primary"} Btn_text={"👍 Start Trading Journey!"} href={"https://t.me/Tradewithtechack"}></Button>
                            <Button Btn_type={"secondary"} Btn_text={"🚀 Claim Free 1:1 Expert Session!"} href={`/sessionContact`}></Button>
                        </motion.div>
                        <motion.div className="turstPilot !pt-12"
                            initial={{y:50, opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{delay:0.8}}
                        >
                            <img src={trustPilot} alt="" />
                        </motion.div>
                    </div>
                </div>
                <motion.div className="right_half w-[40%] h-screen 2xl:h-full bg-[var(--secondary)] relative"
                    initial={{x:50, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{delay:0.2}}
                >
                    <img src={Hero_img} alt="" className="h-[90%] absolute bottom-0 left-[-60px]"/>
                </motion.div>
            </div>

            <div className="myContainer md:hidden !mt-5">
                <motion.img src={Hero_img_mobile} alt="" className="w-full"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                />
                <motion.p className="heading text-4xl font-semibold !mt-10"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:0.7}}    
                >
                    🚀 Master Futures & <span className="text-[var(--secondary)]">Options Trading</span> for Garanteed <span className="text-[var(--secondary)]">Growth!</span>
                </motion.p>
                <motion.p className="short_description text-base !mt-5 text-[var(--text_normal)]"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:0.9}}  
                >
                    🔍 Unlock the Secrets to Successful Futures & Options Trading! Join our thriving community of experts to access exclusive trading strategies, daily market updates, and hands-on guidance for financial success.  
                </motion.p>
                <motion.div className="button_container flex flex-col gap-3 !pt-8"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:1.1}}  
                >
                    <Button Btn_type={"primary"} Btn_text={"👍 Start Trading Journey!"} href={"https://t.me/Tradewithtechack"} additional_class={"text-sm !px-3"}></Button>
                    <Button Btn_type={"secondary"} Btn_text={"🚀 Claim Free 1:1 Expert Session!"} href={`/sessionContact`} additional_class={'!px-3 !Py-3 w-full'}></Button>
                </motion.div>
                <motion.div className="turstPilot !pt-12"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:1.1}}  
                >
                    <img src={trustPilot} alt="" />
                </motion.div>
            </div>
        </>
    )
}

export default Header