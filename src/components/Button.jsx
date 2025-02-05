import { Link } from "react-router-dom"
import { motion } from "motion/react"

/* eslint-disable react/prop-types */
const Button = ({Btn_type, Btn_text, additional_class, href }) => {
    return(
        <div>
           {
                Btn_type == "primary" ? (
                    <Link to={href}>
                        <motion.button className={`bg-[var(--accent)] border-2 !border-[var(--accent)] text-white !py-3 w-full md:!px-6 md:!py-3 rounded-sm md:text-sm text-2xl cursor-pointer ${additional_class}`}
                            whileHover={{scale:1.05}}
                            whileTap={{scale: 0.9}}
                        >{Btn_text}</motion.button>
                    </Link>
            ) : Btn_type == "secondary" ? (
                <Link to={href} target="_blank">
                    <motion.button className={`border-2 !border-[#313131] text-[#313131] md:!px-6 !py-3 rounded-sm text-sm cursor-pointer ${additional_class}`}
                        whileHover={{scale:1.05}}
                        whileTap={{scale: 0.9}}
                    >{Btn_text}</motion.button>
                </Link>
            ) : (
                <Link to={href}>
                    <motion.button className={`bg-[var(--secondary)] text-white w-full !px-6 !py-2 rounded-sm text-lg font-medium cursor-pointer ${additional_class}`}
                        whileHover={{scale:1.02}}
                        whileTap={{scale: 0.9}}
                    >{Btn_text}</motion.button>
                </Link>
            )
           }
        </div>
    )
}

export default Button