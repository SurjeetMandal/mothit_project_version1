import { motion } from "motion/react";
import star from "../assets/img/Star.svg";
import shiningStar from "../assets/img/sining star.svg"


const testimonials = [
  {
    star: 5,
    name: "Amit Sharma",
    description: "The expert guidance and strategies have transformed my trading skills. Highly recommend Techack!"
  },
  {
    star: 4,
    name: "Neha Gupta",
    description: "The strategies shared helped me maximize my portfolio returns. Excellent service!"
  },
  {
    star: 3,
    name: "Vikram Rao",
    description: "Decent platform, but could use some more in-depth analysis features."
  },
  {
    star: 5,
    name: "Priya Malhotra",
    description: "Techack provides outstanding market insights. I've never been more confident in my investments!"
  },
  {
    star: 4,
    name: "Rohan Mehta",
    description: "Customer support is top-notch! They promptly addressed all my concerns."
  },
  {
    star: 5,
    name: "Ananya Iyer",
    description: "Absolutely brilliant strategies! Helped me grow my investments by 50%."
  },
  {
    star: 3,
    name: "Sumit Agarwal",
    description: "Good insights, but I expected more personalized recommendations."
  },
  {
    star: 4,
    name: "Deepak Choudhury",
    description: "Very useful platform for beginners. The learning curve is smooth."
  },
  {
    star: 5,
    name: "Meera Nair",
    description: "The best financial decision I ever made was joining Techack!"
  },
  {
    star: 5,
    name: "Suresh Pillai",
    description: "Helped me make informed decisions and avoid common trading mistakes!"
  },
  {
    star: 4,
    name: "Sakshi Jain",
    description: "Techack offers great tools and analytics. Just needs a mobile app!"
  },
  {
    star: 3,
    name: "Naveen Kapoor",
    description: "Okay experience. Some predictions were off, but overall a decent service."
  },
  {
    star: 5,
    name: "Arjun Sen",
    description: "Their training modules are top-tier. I feel much more confident trading!"
  },
  {
    star: 4,
    name: "Pallavi Joshi",
    description: "Reliable and informative. Some more real-time alerts would be helpful."
  },
  {
    star: 5,
    name: "Rahul Deshmukh",
    description: "Techack turned me from a novice into a pro investor!"
  },
  {
    star: 3,
    name: "Tina Verma",
    description: "Decent platform but could be more interactive."
  },
  {
    star: 4,
    name: "Vikas Pandey",
    description: "I appreciate the detailed reports and stock recommendations."
  },
  {
    star: 5,
    name: "Ishita Sharma",
    description: "Brilliant strategies! I've doubled my portfolio in just six months."
  },
  {
    star: 4,
    name: "Abhinav Bhatt",
    description: "Solid service, but more case studies would be a great addition."
  },
  {
    star: 5,
    name: "Sunita Menon",
    description: "Techack has saved me from multiple bad investments. Highly recommended!"
  },
  {
    star: 3,
    name: "Ankur Singh",
    description: "Content is good, but the user interface could be better."
  },
  {
    star: 5,
    name: "Devika Mishra",
    description: "A life-changing platform for traders and investors alike!"
  },
  {
    star: 4,
    name: "Harish Reddy",
    description: "The webinars are insightful and packed with useful tips."
  },
  {
    star: 5,
    name: "Pooja Khatri",
    description: "I've seen real financial growth thanks to their expert recommendations!"
  },
  {
    star: 4,
    name: "Manoj Tiwari",
    description: "A trustworthy service for market insights and stock recommendations."
  }
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
        <p className="heading2 text-center leading-11 !mt-2 md:leading-16 max-w-[1440px] mx-auto">
          What Our Clients Say - Success Stories That Inspire
        </p>
        <p className="short_description2 text-center !mt-2">
          Hear from our satisfied learners about their trading success with Techack.
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
            <p className="text-gray-600 !mt-2 line-clamp-3">{item.description}</p>
            <p className="!mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
