import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import courseImg from "../assets/img/Course.jpg"
import Button from "../components/Button";
import { motion, useAnimation } from "motion/react"

const Course = () => {

  const[filterNav, setFilterNav] = useState('overview')

  const controls = useAnimation();

  useEffect(()=>{
      controls.set({
        scale: 0
      })
      controls.start({
        scale:1,
        transition: {duration: 0.3}
      })
  },[controls, filterNav, setFilterNav])

  return (
    <div>
      <NavBar LinkColor={"text-black"}/>
      <div className="!pt-10 md:!pt-40 myContainer flex flex-col md:flex-row">

         <motion.div className="w-full md:w-[50%]">
            <div className="border-2 border-[var(--text_normal)] flex items-center gap-2 !px-6 !py-2 rounded-md w-[185px]">
              Live 1:1 Classes 
              <div className="w-3 h-3 rounded-full bg-[var(--accent)]">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] absolute animate-ping"></div>
              </div>
            </div>
            <p className="heading text-4xl text-[var(--text_normal)] !mt-6">
              Tech Hack Course For You.
            </p>
            <p className="shortDescription text-[var(--text_normal)] !mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae dicta nostrum ratione qui veniam nisi delectus, porro dolores sint consequuntur id ab at natus aut quaerat, saepe, magni dignissimos!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae dicta nostrum ratione qui veniam nisi delectus, porro dolores sint consequuntur id ab at natus aut quaerat, saepe, magni dignissimos!
            </p>
            <div className="filterNav !mt-12 bg-[#FFDDDA] w-full h-12 rounded-sm flex items-center gap-10">
              <p className="cursor-pointer text-[var(--text_normal)] !pl-5" onClick={()=>setFilterNav("overview")}>
                Overview
              </p>

              <motion.p className="cursor-pointer text-[var(--text_normal)]" onClick={()=>setFilterNav("curriculum")}>
                Curriculum
              </motion.p>

              <p className="cursor-pointer text-[var(--text_normal)]" onClick={()=>setFilterNav("instructor")}>
                Instructor
              </p>
            </div>

            {
              filterNav == "overview" ?
                <motion.div className="w-full bg-white rounded-b-sm !p-4 !mt-4"
                  animate={controls}
                >
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam a repellendus id velit excepturi nihil eius voluptates nostrum ut, voluptatibus sequi ullam esse eum incidunt optio accusamus rerum vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus omnis magni quas, laborum praesentium obcaecati harum quibusdam totam. Vel ullam totam aliquam eveniet quam consectetur itaque ducimus at sapiente.lorel Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos iste vero harum vitae eum totam eius asperiores earum accusantium odit, dicta maxime officiis ipsum culpa, non alias reiciendis dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero facere omnis dolore facilis laborum distinctio sed exercitationem. Deserunt libero autem distinctio ipsum voluptates dolore vero doloribus, enim quam ratione aut!</p>
                </motion.div>
              : filterNav == "curriculum" ?
                <motion.div className="w-full bg-white rounded-b-sm !p-4 !mt-4"
                  animate={controls}
                >
                  curriculum
                </motion.div>
              : 
                <motion.div className="w-full bg-white rounded-b-sm !p-4 !mt-4"
                  animate={controls}
                >
                  instructor
                </motion.div>
            }
         </motion.div>

         <motion.div className="w-full md:w-[50%] flex justify-center !mt-10 md:!mt-0"
          initial={{y:80, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration: 0.3}}
         >
            <div className="md:w-[90%] lg:w-[70%] bg-white !p-4 rounded-sm h-[560px] shadow-xl border-gray-200 border-2">
              <img src={courseImg} alt="" className="rounded-sm w-[380px] h-[320px]"/>
              <p className="text-[var(--text_normal)] !mt-4">Live Course</p>
              <p className="text-2xl !mt-2 text-[var(--text_normal)]">Tag Line Of the Course</p>
              <p className="text-[var(--secondary)] font-semibold text-4xl !mt-4">₹ 3000 <span className="text-xl text-[var(--text_light)] font-medium">+ GST</span> <span className="line-through text-2xl font-medium text-[var(--text_normal)]">9000</span></p>
              <Button Btn_text={"🚀 Book Free 1:1 Session"} Btn_type={"secondary"} additional_class={"w-full !mt-4"}></Button>
            </div>
         </motion.div>

      </div>
      <Footer marginTop={"!mt-40"} />
    </div>
  )
}

export default Course
