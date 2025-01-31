import offering_img from "../assets/img/How it work vector.svg"

const offering = [
    {
        Title: '✅ Live Trading Calls',
        Description: ' Maximize your profits with accurate entry and exit points. '
    },
    {
        Title: '✅ Daily Market Analysis',
        Description: ' Maximize your profits with accurate entry and exit points. '
    },
    {
        Title: '✅ Proven Strategies',
        Description: ' Maximize your profits with accurate entry and exit points. '
    },
    {
        Title: '✅ Free Learning Resources',
        Description: ' Maximize your profits with accurate entry and exit points. '
    },
    {
        Title: '✅ Expert Guidance',
        Description: ' Maximize your profits with accurate entry and exit points. '
    }
]

const Offering = () => {
  return (
    <>
      <div className="myContainer !mt-40 flex flex-col items-center">
        <img src={offering_img} alt="" />
        <p className="heading2">
            What You&apos;ll Get
        </p>
        <p className="short_description2">
            All the thing&apos;s we promise you.
        </p>
      </div>

      <div className="myContainer">
        <div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15">
            {
                offering.map((item,index)=>(
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

export default Offering
