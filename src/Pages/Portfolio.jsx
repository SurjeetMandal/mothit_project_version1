import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const Portfolio = () => {
  return (
    <>
      <NavBar LinkColor={"text-white"}/>
      <div className="myContainer flex flex-col items-center text-center !pt-20 md:!pt-40 !pb-16 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white">
    
        {/* Heading */}
        <p className="text-4xl md:text-5xl font-extrabold !mb-6">
          📈 <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FFD700] to-[#FF6347]">Maximize Your Wealth with Expert Portfolio Management Services (PMS)!</span> 🚀
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 !mb-8 max-w-3xl">
          💹 Earn Over <span className="font-bold text-white">40% Monthly Returns</span> on Your Capital  
          through advanced stock market options trading!
        </p>

        {/* Key Benefits - Glassmorphism Effect */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 !p-6 rounded-xl shadow-lg w-full md:w-[80%] lg:w-[60%] !mb-10 z-20">
          <ul className="text-lg !space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Proven Strategies</strong> – Time-tested methods for consistent gains.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Expert Guidance</strong> – Market insights from seasoned professionals.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Tailored Solutions</strong> – Personalized investment plans for maximum returns.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <p className="text-2xl font-semibold text-[#FFD700] !mb-4">
          📢 Start your journey toward financial freedom today!
        </p>

        {/* Contact Information - Modern Card */}
        <div className="bg-white text-black !p-6 rounded-lg shadow-2xl w-full md:w-[70%] lg:w-[50%] !mb-8">
          <p className="text-lg font-semibold">📞 Contact Us to Learn More & Secure Your Spot!</p>
          <p className="!mt-4 text-lg flex justify-center items-center gap-3">
            <span className="text-green-500 text-2xl">📲</span> <strong>WhatsApp:</strong> +91 9355166193
          </p>
          <p className="!mt-2 text-lg flex justify-center items-center gap-3">
            <span className="text-blue-500 text-2xl">📩</span> <strong>Telegram ID:</strong> @Tech_ack
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 !mt-4">
          ⚠ <strong>Disclaimer:</strong> All investments carry risk. Past performance does not guarantee future results.
        </p>
      </div>

      <Footer marginTop={"!mt-0"} />
    </>

  )
}

export default Portfolio
