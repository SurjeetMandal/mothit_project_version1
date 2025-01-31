import course_vector from "../assets/img/Famous course vector.svg"
import cousse_img from "../assets/img/Course.jpg"
import trustpilot from "../assets/img/Course_trust.svg"
import star from "../assets/img/Star.svg"
import Button from "./Button"

const Course = () => {
  return (
    <div>
      <div className="myContainer !mt-40 flex flex-col items-center">
        <img src={course_vector} alt="" className="w-15"/>
        <p className="heading2 text-center">
            Our Trending Course
        </p>
        <p className="short_description2 text-center">
            Start from scratch. Learn step by step & Make your best Portfolio
        </p>
      </div>

      <div className="myContainer !mt-15 flex justify-center">
        <div className="course_container bg-white !p-4 flex flex-col md:flex-row md:gap-5 lg:gap-15 gap-6 h-full md:max-w-[1000px] rounded-lg shadow-xl">

            <div className="img_container rounded-md md:w-[40%]">
                <img src={cousse_img} alt="" className="w-full md:h-[330px] lg:h-[350px] rounded-md"/>
            </div>

            <div className="details md:w-[60%]">
                <p className="course_name text-3xl md:text-4xl font-medium text-[var(--text_normal)] text-center">
                    Master Trading with Our Option Trading Course
                </p>

                <div className="trust flex w-full !mt-10 !mb-10 md:!mt-0 md:!mb-0 lg:!mb-12 md:h-[50%] items-center">
                    <div className="w-[50%] flex flex-col items-center border-r border-[var(--text_light)]">
                        <img src={trustpilot} alt="" />
                        <p className="text-[var(--text_normal)]">Satisfied Learners</p>
                    </div>
                    <div className="w-[50%]  flex flex-col items-center">
                        <p className="rating text-2xl font-medium text-[var(--text_normal)] flex gap-2 items-center">
                            4.5 
                            <div className="star_container flex">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </p>
                        <p className="rating text-[var(--text_normal)]">Average Ratings</p>
                    </div>
                </div>

                <Button Btn_type={""} Btn_text={"View Course"} href={"/course"}></Button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Course
