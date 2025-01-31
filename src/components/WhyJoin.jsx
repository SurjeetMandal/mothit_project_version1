import offering_img from "../assets/img/How it work vector.svg"

const WhyJoinArray = [
    {
        Title: '✅ Daily 5-6 High-Accuracy Option Calls (90% Accuracy) 📈',
    },
    {
        Title: '✅ Exclusive 2-3 Equity Calls for Maximum Gains! 🚀',
    },
    {
        Title: '✅ Proven Strategies✅ Expert Analysis & Real-Time Trade Updates! 🎯',
    },
    {
        Title: '✅ Proven Strategies for Consistent Profits! 💰',
    },
]

const WhyJoin = () => {
  return (
    <>
      <div className="myContainer !mt-40 flex flex-col items-center">
        <img src={offering_img} alt="" />
        <p className="heading2 text-center leading-10">
            Why Join Techack Premium?
        </p>
        <p className="short_description2 text-center !mt-2">
            Exclusive Benefits for Premium Members 
        </p>
      </div>

      <div className="myContainer">
        <div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15">
            {
                WhyJoinArray.map((item,index)=>(
                    <div key={index} className="bg-white min-w-[300px] md:w-[300px] !p-4 custom-dotted-border rounded-md">
                        <p className="text-xl text-[var(--text_normal)] font-medium">{item.Title}</p>
                        <p className="text-sm !mt-2 text-[var(--text_normal)]">{item.Description}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default WhyJoin