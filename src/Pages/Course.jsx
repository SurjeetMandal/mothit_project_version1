import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import courseImg from "../assets/img/Course.jpg";
import Button from "../components/Button";
import { motion, useAnimation } from "motion/react";
import FAQs from "../components/Faq";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = [
  {
    question: "What will I learn in this course?  ",
    answer:
      "→ This comprehensive course covers everything from the basics to advanced levels of options trading. You will learn profitable strategies, risk management, and in-depth analysis techniques to succeed in the market.",
  },
  {
    question: "What is the duration of the course?  ",
    answer:
      "→ The course spans 2 months. It includes multiple analysis strategies, with 2 weeks dedicated to practical sessions in a live market. These live sessions will allow you to test and validate the strategies you have learned",
  },
  {
    question: "Will I have access to premium calls on the Telegram channel?",
    answer:
      "→ Yes, as part of the course, you will receive access to our exclusive Telegram Premium Channel. Here, our expert traders provide detailed analysis, including entry and exit points, stop-loss strategies, and guidance on money and risk management.",
  },
  {
    question: "Can I pay the course fees in installments? ",
    answer:
      "→ Absolutely! We offer flexible installment payment options to make the course more accessible.",
  },
  {
    question: "Do you offer discounts for one-time full payment?",
    answer:
      "→ Yes, we offer a discount if you choose to pay the entire course fee in a single payment.",
  },
  {
    question: "Will I receive support after completing the course?   ",
    answer:
      "→ Yes, we provide lifetime support to all our students. Our team will continue to assist you even after the course has been completed.",
  },
  {
    question: "Can I re-attend a missed class?",
    answer:
      "→ Yes, you can re-attend any missed classes. Additionally, we offer special doubt-clearing sessions for topics you may need further assistance with.",
  },
];

const curriculum = [
  {
    title: "🔒 What is Stock Market?",
    topics: ["Definition", "Purpose", "Key players"],
  },
  {
    title: "🔒 Stock Exchange & Regulatory",
    topics: ["Stock Exchange", "Regulatory Bodies"],
  },
  {
    title: "🔒 Types of Markets & Their Purpose",
    topics: ["Primary Market", "Equity and Derivatives"],
  },
  { title: "🔒 Investment & Trading", topics: ["Investment", "Trading"] },
  {
    title: "🔒 Types of Trading in Markets",
    topics: ["Day Trading", "Swing Trading", "Position Trading", "Scalping"],
  },
  {
    title: "🔒 Futures & Options Trading",
    topics: ["Futures", "Options", "Purpose"],
  },
  {
    title: "🔒 Index in Markets",
    topics: ["Popular Indexes: Nifty 50, Bank Nifty, Sensex etc.", "Purpose"],
  },
  {
    title: "🔒 Option Chain Analysis",
    topics: ["Option Chain contracts", "Key Metrics"],
  },
  {
    title: "🔒 Open Interest (OI) & Volume",
    topics: ["Open Interest (OI)", "Volume"],
  },
  { title: "🔒 Support & Resistance" },
  {
    title: "🔒 Option Greeks",
    topics: ["Delta", "Gamma", "Theta", "Vega", "Rho"],
  },
  { title: "🔒 Candlestick Patterns" },
  { title: "🔒 Chart Patterns" },
  { title: "🔒 Indicators" },
  { title: "🔒 Put-Call Ratio (PCR)" },
  { title: "🔒 Index Stock Weightage & Its Impact on Different Indexes" },
  { title: "🔒 Price Action-Based Trading" },
  {
    title: "🔒 Risk Management",
    topics: ["Position Sizing", "Stop-Loss", "Risk-to-Reward Ratio"],
  },
  {
    title: "🔒 Psychology & Traps in Trading",
    topics: ["Common Traps"],
  },
  { title: "🔒 Scalping & Hedging" },
  {
    title: "🔒 Best Trading Setup for Scalping",
    topics: [
      "Timeframe",
      "Indicators",
      "Position Sizing",
      "Support & Resistance",
    ],
  },
  {
    title: "🔒 Best Trading Setup for Hedging",
    topics: [
      "Option Chain",
      "Open Interest (OI) & contracts",
      "Volume",
      "Position Sizing",
      "Risk to Reward ratio",
    ],
  },
  { title: "🔒 Live Calls & Back Test Strategy" },
  { title: "🔒 Course Fees Recover with Live Trading Training" },
];

const Course = () => {
  const [filterNav, setFilterNav] = useState("curriculum");
  const [openIndex, setOpenIndex] = useState(null);

  const controls = useAnimation();

  useEffect(() => {
    controls.set({
      scale: 0,
    });
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  }, [controls, filterNav, setFilterNav]);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <NavBar LinkColor={"text-black"} />
      <div className="!pt-10 md:!pt-40 myContainer flex flex-col md:flex-row max-w-[1440px] !mx-auto md:justify-center">
        <motion.div className="w-full md:w-[50%]">
          <div className="border-2 border-[var(--text_normal)] flex items-center gap-2 !px-6 !py-2 rounded-md w-[185px]">
            Live 1:1 Classes
            <div className="w-3 h-3 rounded-full bg-[var(--accent)]">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] absolute animate-ping"></div>
            </div>
          </div>
          <p className="heading text-4xl text-[var(--text_normal)] !mt-6">
            Master Future & Options Trading
          </p>
          <p className="shortDescription text-[var(--text_normal)] !mt-4">
            Learn Stock Market, Forex Market, Crypto Tradin & More with Expert
            Guidance!
          </p>
          <div className="filterNav !mt-12 bg-[#FFDDDA] w-full h-12 rounded-sm flex items-center gap-10">
            <p
              className="cursor-pointer text-[var(--text_normal)] !pl-5"
              onClick={() => setFilterNav("overview")}
            >
              Overview
            </p>

            <motion.p
              className="cursor-pointer text-[var(--text_normal)]"
              onClick={() => setFilterNav("curriculum")}
            >
              Curriculum
            </motion.p>

            <p
              className="cursor-pointer text-[var(--text_normal)]"
              onClick={() => setFilterNav("instructor")}
            >
              Instructor
            </p>
          </div>

          {filterNav == "overview" ? (
            <motion.div
              className="w-full bg-white rounded-b-sm !p-4 !mt-4"
              animate={controls}
            >
              <div className="max-w-3xl mx-auto">
                <h1 className="text-xl md:text-2xl font-bold text-zinc-800 !mb-6">
                  Trade With Techack – Complete Crash Course on Options Trading
                </h1>
                <p className="text-base text-zinc-600 !mb-8">
                  Master the art of Options Trading with our comprehensive crash
                  course designed for traders of all levels. Learn the
                  fundamentals, advanced strategies, and practical techniques to
                  trade confidently in the stock market.
                </p>

                <div className="max-w-3xl mx-auto">
                  <h2 className="text-xl font-semibold text-zinc-800 !mb-4">
                    What You’ll Learn:
                  </h2>
                  <ul className="!space-y-3 text-zinc-600">
                    <li>
                      ✅ <strong>Stock Market Basics</strong> – Understanding
                      market structure, exchanges, and regulatory bodies.
                    </li>
                    <li>
                      ✅ <strong>Trading & Investment</strong> – Explore day
                      trading, swing trading, scalping, and position trading.
                    </li>
                    <li>
                      ✅ <strong>Futures & Options</strong> – Learn the
                      mechanics, purpose, and strategies of derivatives trading.
                    </li>
                    <li>
                      ✅ <strong>Technical Analysis</strong> – Candlestick
                      patterns, chart patterns, indicators, and price action.
                    </li>
                    <li>
                      ✅ <strong>Advanced Options Strategies</strong> – Option
                      Greeks, option chain analysis, open interest, and volume.
                    </li>
                    <li>
                      ✅ <strong>Risk Management & Psychology</strong> –
                      Position sizing, stop-loss, risk-to-reward ratios, and
                      avoiding common trading traps.
                    </li>
                    <li>
                      ✅ <strong>Live Trading & Strategy Backtesting</strong> –
                      Hands-on experience with real market conditions.
                    </li>
                  </ul>
                </div>

                <div className="max-w-3xl mx-auto !mt-8">
                  <h2 className="text-xl font-semibold text-zinc-800 !mb-4">
                    Why Choose Us?
                  </h2>
                  <ul className="!space-y-3 text-zinc-600">
                    <li>
                      📌 <strong>Live Market Training</strong> – Trade alongside
                      experts in real-time.
                    </li>
                    <li>
                      📌 <strong>Premium Telegram Calls</strong> – Get live
                      market insights and strategies.
                    </li>
                    <li>
                      📌 <strong>E-Books & Recorded Sessions</strong> – Access
                      exclusive study material anytime.
                    </li>
                    <li>
                      📌 <strong>Proven Results</strong> – Our strategies have
                      consistently delivered success.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : filterNav == "curriculum" ? (
            <motion.div
              className="w-full bg-white rounded-b-sm !p-4 !mt-4"
              animate={controls}
            >
              {curriculum.map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <p className="text-lg font-semibold">{item.title}</p>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </div>
                  {openIndex === index && item.topics && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="text-gray-700 text-sm !px-6">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="w-full bg-white rounded-b-sm !p-4 !mt-4"
              animate={controls}
            >
              <div className="max-w-3xl !mx-auto">
                <h1 className="text-xl md:text-2xl font-bold text-zinc-800 !mb-6">
                  Meet Mohit Daksh – Your Guide to Mastering Options Trading
                </h1>
                <p className="text-base text-zinc-600 !mb-8">
                  I’m Mohit Daksh, a passionate Options & Futures trader since
                  2021. Over the years, I’ve developed and mastered various
                  trading strategies that have helped me achieve consistent
                  success in the stock market. Now, I want to share my expertise
                  with you!
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-zinc-800 !mb-4">
                  Why Learn from Me?
                </h2>
                <ul className="!space-y-3 text-zinc-600">
                  <li>
                    ✅ <strong>Proven Track Record</strong> – Over 150+ students
                    trained with a high success rate.
                  </li>
                  <li>
                    ✅ <strong>Real Market Experience</strong> – Trading isn’t
                    just theory; I provide live market calls to enhance your
                    learning.
                  </li>
                  <li>
                    ✅ <strong>Practical & Result-Oriented Approach</strong> –
                    Learn strategies that actually work in real trading
                    conditions.
                  </li>
                  <li>
                    ✅ <strong>Financial Growth</strong> – My goal is to help
                    you grow your capital and achieve financial independence.
                  </li>
                </ul>
              </div>

              <div className="max-w-3xl mx-auto !mt-8">
                <h2 className="text-xl font-semibold text-zinc-800 !mb-4">
                  What I Offer?
                </h2>
                <ul className="!space-y-3 text-zinc-600">
                  <li>
                    📌 <strong>Complete Crash Course on Options Trading</strong>{" "}
                    – From beginner to advanced strategies.
                  </li>
                  <li>
                    📌{" "}
                    <strong>
                      Live Trading Sessions & Premium Market Calls
                    </strong>{" "}
                    – Learn and trade in real-time.
                  </li>
                  <li>
                    📌 <strong>Exclusive Learning Resources</strong> – E-books,
                    recorded sessions, and hands-on market analysis.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="w-full md:w-[50%] h-[590px] flex justify-center !mt-10 md:!mt-0"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="md:w-[90%] lg:w-[70%] bg-white !p-4 rounded-sm shadow-xl border-gray-200 border-2">
            <img
              src={courseImg}
              alt=""
              className="rounded-sm w-full h-[320px]"
            />
            <p className="text-[var(--text_normal)] !mt-4">Live Course</p>
            <p className="text-2xl !mt-2 text-[var(--text_normal)]">
              Limited-Time Offer - Enroll Now to Save 20%
            </p>
            <p className="text-[var(--secondary)] font-semibold text-4xl !mt-4">
              ₹ 3000
              <span className="text-xl text-[var(--text_light)] font-medium">
                /per week
              </span>{" "}
              <span className="text-2xl font-medium text-green-500">
                (Save ₹6000)
              </span>
            </p>
            <Button
              Btn_text={"🚀 Clain Your Free Trading Strategy Session Today!"}
              Btn_type={"secondary"}
              additional_class={"w-full !mt-4"}
              href={"/courseBooking"}
            ></Button>
          </div>
        </motion.div>
      </div>
      <FAQs FAQ={FAQ} />
      <Footer marginTop={"!mt-40"} />
    </div>
  );
};

export default Course;
