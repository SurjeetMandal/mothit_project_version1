import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import aboutImg from "../assets/img/AboutMeImg.svg"
import Button from "../components/Button";

const About = () => {
  return (
    <div className="">
      <NavBar LinkColor={"text-black"}/>

      <div className="myContainer flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:!pt-30 !pt-10">

      <div className="w-full md:w-[60%] text-center md:text-left">
        
        {/* Heading */}
        <p className="text-4xl md:text-5xl font-extrabold text-[var(--text_normal)] !mb-6 text-start">
          🚀 About Techack Premium
        </p>

        {/* Description */}
        <p className="text-lg md:text-lg text-gray-600 !mb-6 text-start">
          At <span className="font-bold text-[var(--secondary)]">Techack Premium</span>, we help traders <span className="text-yellow-400">maximize profits</span> through expert-led strategies, real-time market insights, and premium stock market signals.
        </p>

        {/* Key Features */}
        <div className="bg-white !p-3 rounded-xl border-2 border-gray-300 w-full !mb-6 text-start">
          <ul className="text-sm space-y-4 text-gray-800">
            <li className="!mt-1">✔ <strong>Expert-Led Trading Strategies</strong> – Learn & apply proven techniques.</li>
            <li className="!mt-1">✔ <strong>High-Accuracy Trading Signals</strong> – 90%+ accuracy in stock market calls.</li>
            <li className="!mt-1">✔ <strong>Portfolio Management Services (PMS)</strong> – Earn <span className="font-bold text-green-500">up to 40% monthly returns</span>.</li>
            <li className="!mt-1">✔ <strong>Exclusive Trading Community</strong> – Real-time trade updates & expert guidance.</li>
            <li className="!mt-1">✔ <strong>Risk-Managed Investments</strong> – Minimize risk, maximize profit.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <p className="text-xl font-semibold text-[var(--text_normal)] !mb-4">
          📢 Join Techack Premium Today & Start Trading Like a Pro!
        </p>

        {/* Contact Information */}
        <div className="flex gap-4 flex-col md:flex-row">
          <Button Btn_type={"primary"} Btn_text={"📲 Connect WhatsApp"} additional_class={"text-base"}></Button>
          <Button Btn_type={"secondary"} Btn_text={"📩 Join Telegram"} additional_class={"w-full !text-base"}></Button>
        </div>

      </div>

      <div className="w-full md:w-[40%]">
        <img 
          src={aboutImg} 
          alt="Stock Market Trading" 
          className="w-full md:h-[500px] h-[300px]"
        />
      </div>

    </div>

      <Footer marginTop={"!mt-40"} />
    </div>
  )
}

export default About
