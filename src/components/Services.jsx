import services_img from "../assets/img/Hero star vector.svg"
import Button from "./Button";

const servicesOffered = [
    {
        Title: "📚 Online Course: Option Trading",
        AllPoints: `
            <li>Learn the fundamentals of Option Trading from scratch.</li>
            <li>Covers strategies like <strong>Iron Condor, Straddle, Strangle, Covered Calls</strong>, etc.</li>
            <li>Live interactive sessions & pre-recorded materials.</li>
            <li>Suitable for <strong>beginners & experienced traders</strong>.</li>
            <li><strong>Access via Telegram</strong> for real-time support & discussions.</li>
        `,
        CTA: "Know More",
        CTA_Link: "/course"
    },
    {
        Title: "📈 Option Trading Calls",
        AllPoints: `
            <li><strong>Real-time buy & sell signals</strong> for NIFTY, BANKNIFTY, and stock options.</li>
            <li>Expert analysis to <strong>maximize profits & minimize risks</strong>.</li>
            <li><strong>Intraday & Swing Trading Calls</strong> based on market trends.</li>
            <li>Exclusive <strong>Telegram group</strong> with daily updates, charts & insights.</li>
        `,
        CTA: "Know More",
        CTA_Link: "/calls"
    },
    {
        Title: "💼 Portfolio Management Services",
        AllPoints: `
            <li>Personalized <strong>investment strategies</strong> based on your goals & risk appetite.</li>
            <li>Diversified portfolio allocation for <strong>long-term wealth creation</strong>.</li>
            <li><strong>Hedging & risk management</strong> techniques for consistent returns.</li>
            <li>Handled by <strong>experienced professionals</strong> with market expertise.</li>
            <li><strong>Track updates via Telegram</strong> & stay informed about your investments.</li>
        `,
        CTA: "Know More",
        CTA_Link: "/portfolio"
    }
];


// eslint-disable-next-line react/prop-types
const Services = ({paddingTop}) => {
  return (
    <>
      <div className={`myContainer ${paddingTop} flex flex-col items-center`}>
        <img src={services_img} alt="" className="w-15"/>
        <p className="heading2 text-center">
            Our Services
        </p>
        <p className="short_description2 text-center">
            Everything we provide you to help you grow your portfolio.
        </p>
      </div>

      <div className="myContainer flex gap-10 flex-wrap justify-center !mt-15 items-start">
        {
            servicesOffered.map((item, index)=>(
                <div key={index} className="w-full md:w-[300px] bg-white !p-4 shadow-xl rounded-lg border-gray-300 border-2">
                    <p className="text-2xl text-[var(--text_normal)] font-semibold">{item.Title}</p>
                    <ul dangerouslySetInnerHTML={{ __html: item.AllPoints }} className="!mt-4 list-disc list-inside !mb-6"></ul>
                    <Button Btn_text={item.CTA} Btn_type={""} href={item.CTA_Link}></Button>
                </div>
            ))
        }
      </div>
    </>
  )
}

export default Services
