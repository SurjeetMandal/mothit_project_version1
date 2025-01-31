import Hero_img from "../assets/img/lg_hero_img.svg"
import trustPilot from "../assets/img/Hero trust vector.svg"
import Hero_img_mobile from "../assets/img/Sm Hero Img.png"
import Button from "./Button"

const Header = () => {
    return(
        <>
            <div className="w-full md:flex hidden">
                <div className="left_half w-[60%] h-screen flex flex-col justify-center">
                    <div className="myContainer !mt-20 !pr-0">
                        <div className="heading">
                            <p className="lg:text-6xl md:text-4xl font-semibold text-[var(--text_normal)] !mt-5">
                                🚀 Welcome to the <br /> <span className="text-[var(--secondary)]">Ultimate Futures</span> & <br />Options <span className="text-[var(--secondary)]">Trading Hub!</span>
                            </p>
                        </div>
                        <div className="description">
                            <p className="!pt-6 w-[80%] md:text-xs lg:text-base text-[var(--text_normal)]">
                                🔍 Master the Art of Trading Join our exclusive community to explore the world of Futures and Options Trading with expert insights, daily market updates, and actionable strategies. 🔗 Join now and take your trading to the next level!
                            </p>
                        </div>
                        <div className="button_container flex gap-4 !pt-6">
                            <Button Btn_type={"primary"} Btn_text={"Join Telegram"} href={"/calls"}></Button>
                            <Button Btn_type={"secondary"} Btn_text={"🚀 Book Free 1:1 Session"}></Button>
                        </div>
                        <div className="turstPilot !pt-12">
                            <img src={trustPilot} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right_half w-[40%] h-screen bg-[var(--secondary)] relative">
                    <img src={Hero_img} alt="" className="h-[90%] absolute bottom-0 left-[-60px]"/>
                </div>
            </div>

            <div className="myContainer md:hidden !mt-5">
                <img src={Hero_img_mobile} alt="" className="w-full"/>
                <p className="heading text-4xl font-semibold !mt-10">
                    🚀 Welcome to the <br /> <span className="text-[var(--secondary)]">Ultimate Futures</span> & <br />Options <span className="text-[var(--secondary)]">Trading Hub!</span>
                </p>
                <p className="short_description text-base !mt-5 text-[var(--text_normal)]">
                    🔍 Master the Art of Trading Join our exclusive community to explore the world of Futures and Options Trading with expert insights, daily market updates, and actionable strategies.  
                </p>
                <div className="button_container flex gap-3 !pt-8">
                    <Button Btn_type={"primary"} Btn_text={"Join Telegram"} href={"/calls"} additional_class={"text-sm !px-5"}></Button>
                    <Button Btn_type={"secondary"} Btn_text={"🚀 Book Free 1:1 Session"}></Button>
                </div>
                <div className="turstPilot !pt-12">
                    <img src={trustPilot} alt="" />
                </div>
            </div>
        </>
    )
}

export default Header