import offering_img from "../assets/img/How it work vector.svg"

const HowItWOrkArray = [
    {
        Title: '✅ 1. Learn & Master Option Trading',
        Description: ' Join our expert-led classes from scratch. Understand proven strategies for consistent profits. '
    },
    {
        Title: '✅ 2. Get Premium Intraday Calls',
        Description: 'Access our exclusive Telegram channel for daily calls. Get precise entry, exit, and stop-loss recommendations.'
    },
    {
        Title: '✅ 3. Start Portfolio Management (PMS)',
        Description: 'Let our experts handle your Demat account. Earn up to 40% returns on your capital monthly.'
    },
]

const HowItWork = () => {
  return (
    <div>
      <>
      <div className="myContainer !mt-40 flex flex-col items-center">
        <img src={offering_img} alt="" />
        <p className="heading2">
            How It Work&apos;s
        </p>
        <p className="short_description2 text-center">
            Everything you need to know before starting you Journey.
        </p>
      </div>

      <div className="myContainer">
        <div className="offering_card_container flex gap-4 flex-wrap justify-center !mt-15">
            {
                HowItWOrkArray.map((item,index)=>(
                    <div key={index} className="bg-white min-w-[300px] md:w-[300px] !p-4 custom-dotted-border rounded-md">
                        <p className="text-xl text-[var(--text_normal)] font-medium">{item.Title}</p>
                        <p className="text-sm !mt-2 text-[var(--text_normal)]">{item.Description}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
    </div>
  )
}

export default HowItWork
