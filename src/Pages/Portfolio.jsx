import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import FAQs from "../components/Faq"


const FAQ = [
  {
      question: " What is PMS (Portfolio Management Service) in Options Trading?",
      answer: "→ PMS is a personalized investment service where our expert traders manage your options trading portfolio on your behalf. We design and execute tailored strategies to maximize returns while managing risks based on your financial goals and preferences."
  },
  {
      question: "How does PMS in Options Trading work?",
      answer: "→ Our team of experienced traders develops a customized options trading strategy for your portfolio. We carefully select the right options trades, execute them, and continuously monitor performance to ensure your portfolio stays aligned with your risk tolerance and investment objectives."
  },
  {
      question: "What are the benefits of PMS in Options Trading?",
      answer: "→ Expert Management: Professional traders handle your portfolio with in-depth market analysis and advanced strategies. Tailored Strategies: Custom strategies based on your specific risk profile and investment goals. Risk Management: We apply strict risk management techniques to minimize potential losses while optimizing returns. Time-Saving: You can invest in options without actively managing trades, leaving it to our experts."
  },
  {
      question: "How do I track the performance of my portfolio?",
      answer: "→ You will have access to a dedicated dashboard where you can track the performance of your portfolio in real-time. Our team will also provide periodic performance reports and updates on the status of your trades."
  },
  {
      question: "Can I withdraw my funds at any time?",
      answer: "→ Yes, you can request a withdrawal of funds at any time. However, we recommend discussing withdrawals with our team to ensure that it aligns with your trading strategy and market conditions."
  },
  {
      question: "How do I get started with PMS in Options Trading?",
      answer: "→ To get started, simply reach out to our team for a consultation. We will assess your financial goals, risk tolerance, and trading preferences, and then develop a tailored strategy for you. Contact us today to begin your journey!"
  },
];


const Portfolio = () => {
  return (
    <>
      <NavBar LinkColor={"text-white"}/>
      <div className="myContainer flex flex-col items-center !pt-20 md:!pt-40 !pb-16 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white">
    
        {/* Heading */}
        <p className="text-4xl md:text-5xl font-extrabold !mb-6 max-w-[1440px] !mx-auto text-center">
          📈 <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#FFD700] to-[#FF6347]">Expert Portfolio Management Services - Achieve 40% Monthly Returns Safely!</span> 🚀
        </p>

        {/* Description */} 
        <p className="text-lg md:text-xl text-gray-300 !mb-8 max-w-[1440px] !mx-auto text-center">
          💹 Unlock <span className="font-bold text-white">40% Monthly Gains</span> - Exper-Led Strategies for Stock Market Success!
        </p>

        {/* Key Benefits - Glassmorphism Effect */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 !p-6 rounded-xl shadow-lg w-full md:w-[80%] lg:w-[60%] !mb-10 z-20 text-center">
          <ul className="text-lg !space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Time-Tested Strategies</strong> – Proven techniques for consistent, reliable growth,
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Professional Insights</strong> – Expert advice for making profitable market moves.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span> <strong>Customized Investment Plans</strong> – Tailored solutions to fit your financial goals.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <p className="text-2xl font-semibold text-[#FFD700] !mb-4 text-center">
          📢 Get Started with Exper Portfolio Management Now - Book Your Consultation Today!
        </p>

        {/* Contact Information - Modern Card */}
        <div className="bg-white text-black !p-6 rounded-lg shadow-2xl w-full md:w-[70%] lg:w-[50%] !mb-8 text-center">
          <p className="text-lg font-semibold">📞 Contact Us to Learn More & Secure Your Spot!</p>
          <p className="!mt-4 text-lg flex justify-center items-center gap-3">
            <span className="text-green-500 text-2xl">📲</span> <strong>WhatsApp:</strong> +91 9355166193
          </p>
          <p className="!mt-2 text-lg flex justify-center items-center gap-3">
            <span className="text-blue-500 text-2xl">📩</span> <strong>Telegram ID:</strong> @Tech_ack
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 !mt-4 text-center">
          ⚠ <strong>Disclaimer:</strong> All investments carry risk. Past performance does not guarantee future results.
        </p>

        <FAQs FAQ={FAQ} />
      </div>

      <Footer marginTop={"!mt-0"} />
    </>

  )
}

export default Portfolio
