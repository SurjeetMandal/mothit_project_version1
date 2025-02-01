import Hero_img from "../assets/img/lg_hero_img.svg"
import trustPilot from "../assets/img/Hero trust vector.svg"
import Hero_img_mobile from "../assets/img/Sm Hero Img.png"
import Button from "./Button"
import { motion } from "motion/react"

const Header = () => {
    return(
        <>
            <div className="w-full md:flex hidden scroll-x-0 overflow-hidden">
                <div className="left_half w-[60%] h-screen flex flex-col justify-center">
                    <div className="myContainer !mt-20 !pr-0">
                        <div className="heading">
                            <motion.p className="lg:text-6xl md:text-4xl font-semibold text-[var(--text_normal)] !mt-5"
                                initial={{y:50, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:0.2}}
                            >
                                🚀 Welcome to the <br /> <span className="text-[var(--secondary)]">Ultimate Futures</span> & <br />Options <span className="text-[var(--secondary)]">Trading Hub!</span>
                            </motion.p>
                        </div>
                        <div className="description">
                            <motion.p className="!pt-6 w-[80%] md:text-xs lg:text-base text-[var(--text_normal)]"
                                initial={{y:50, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:0.4}}
                            >
                                🔍 Master the Art of Trading Join our exclusive community to explore the world of Futures and Options Trading with expert insights, daily market updates, and actionable strategies. 🔗 Join now and take your trading to the next level!
                            </motion.p>
                        </div>
                        <motion.div className="button_container flex gap-4 !pt-6"
                            initial={{y:50, opacity:0}}
                            animate={{y:0, opacity:1}}
                            transition={{delay:0.6}}
                        >
                            <Button Btn_type={"primary"} Btn_text={"Join Telegram"} href={"/calls"}></Button>
                            <Button Btn_type={"secondary"} Btn_text={"🚀 Book Free 1:1 Session"}></Button>
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
                <motion.div className="right_half w-[40%] h-screen bg-[var(--secondary)] relative"
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
                    🚀 Welcome to the <br /> <span className="text-[var(--secondary)]">Ultimate Futures</span> & <br />Options <span className="text-[var(--secondary)]">Trading Hub!</span>
                </motion.p>
                <motion.p className="short_description text-base !mt-5 text-[var(--text_normal)]"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:0.9}}  
                >
                    🔍 Master the Art of Trading Join our exclusive community to explore the world of Futures and Options Trading with expert insights, daily market updates, and actionable strategies.  
                </motion.p>
                <motion.div className="button_container flex gap-3 !pt-8"
                    initial={{y:50, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:1.1}}  
                >
                    <Button Btn_type={"primary"} Btn_text={"Join Telegram"} href={"/calls"} additional_class={"text-sm !px-5"}></Button>
                    <Button Btn_type={"secondary"} Btn_text={"🚀 Book Free 1:1 Session"}></Button>
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