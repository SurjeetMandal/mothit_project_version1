import { motion } from "motion/react";
import star from "../assets/img/Star.svg";
import shiningStar from "../assets/img/sining star.svg"


const testimonials = [
  {
      star: 5,
      name: "Rahul Verma",
      description: "The service is amazing, and the support team is very helpful!"
  },
  {
      star: 3,
      name: "Priya Singh",
      description: "A good learning experience, but some improvements can be made."
  },
  {
      star: 4,
      name: "Adit Sardar",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
      star: 5,
      name: "Rahul Verma",
      description: "The service is amazing, and the support team is very helpful!"
  },
  {
      star: 3,
      name: "Priya Singh",
      description: "A good learning experience, but some improvements can be made."
  },
  {
    star: 4,
    name: "Adit Sardar",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
},
{
    star: 5,
    name: "Rahul Verma",
    description: "The service is amazing, and the support team is very helpful!"
},
{
    star: 3,
    name: "Priya Singh",
    description: "A good learning experience, but some improvements can be made."
},
{
    star: 4,
    name: "Adit Sardar",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
},
{
    star: 5,
    name: "Rahul Verma",
    description: "The service is amazing, and the support team is very helpful!"
},
{
    star: 3,
    name: "Priya Singh",
    description: "A good learning experience, but some improvements can be made."
},
];

const Testimonials = () => {

  
  return (
    <div className="!mb-20">
      <motion.div className="myContainer !mt-40 flex flex-col items-center"
        viewport={{once:true}}
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}} 
      >
      <img src={shiningStar} alt="" className="w-15"/>
        <p className="heading2">
            Testimonials
        </p>
        <p className="short_description2 text-center">
            What our customers and students feel about us.
        </p>
      </motion.div>

      <motion.div className="myContainer flex gap-6 overflow-x-auto scrollbar-hide !mt-15 animate-infinite-scroll"
        viewport={{once:true}}
        initial={{y:90, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.4}} 
      >
        {testimonials.map((item, index) => (
          <div key={index} className="!p-4 border-2 border-gray-300 rounded-lg min-w-[300px] bg-white">
            <div className="flex">
              {[...Array(item.star)].map((_, starIndex) => (
                <img src={star} alt="star" key={starIndex} className="w-5 h-5"/>
              ))}
            </div>
            <p className="text-gray-600 !mt-2 line-clamp-2">{item.description}</p>
            <p className="!mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
