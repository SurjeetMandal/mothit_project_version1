import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Button = ({Btn_type, Btn_text, additional_class, href }) => {
    return(
        <div>
           {
                Btn_type == "primary" ? (
                    <Link to={href}>
                        <button className={`bg-[var(--accent)] border-2 !border-[var(--accent)] text-white !py-3 w-full md:!px-6 md:!py-3 rounded-sm md:text-sm text-2xl cursor-pointer ${additional_class}`}>{Btn_text}</button>
                    </Link>
            ) : Btn_type == "secondary" ? (
                <Link to={href}>
                    <button className={`border-2 !border-[#313131] text-[#313131] !px-6 !py-3 rounded-sm text-sm cursor-pointer ${additional_class}`}>{Btn_text}</button>
                </Link>
            ) : (
                <Link to={href}>
                    <button className={`bg-[var(--secondary)] text-white w-full !px-6 !py-2 rounded-sm text-lg font-medium cursor-pointer ${additional_class}`}>{Btn_text}</button>
                </Link>
            )
           }
        </div>
    )
}

export default Button