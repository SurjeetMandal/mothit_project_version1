import { Link } from "react-router-dom"
import Button from "./Button"
import menu_open from "../assets/img/Menu vector.svg"
import menu_close from "../assets/img/close.svg"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const NavBar = ({LinkColor}) => {

  const[menuStatus, setMenuStatus] = useState("close")

  useEffect(()=>{
    if(menuStatus === "open"){
      document.body.style.overflow = "hidden"
    } else{
      document.body.style.overflow = ""
    }

  },[menuStatus, setMenuStatus])

  const toggleMenu = () =>{
    if(menuStatus === "close"){
      setMenuStatus("open")
    }
    else{
      setMenuStatus("close")
    }
  }

  return (
    <>
      <div className="myContainer md:flex justify-between items-center hidden fixed w-[100%] z-50 backdrop-filter backdrop-blur-lg">
  
        <div className="logo_navItems flex items-center gap-[54px] h-20">
        
          <div className="logo">
            <Link to={"/"} className="cursor-pointer">
              <p className="font-bold text-2xl text-[var(--secondary)]">TWT</p>
            </Link>
          </div>

          <div className="navItems flex gap-8">
            <Link to={"/"} className={`text-md ${LinkColor}`}>Home</Link>
            <Link to={"/service"} className={`text-md ${LinkColor}`}>Services</Link>
            <Link to={"/contact"} className={`text-md ${LinkColor}`}>Contact</Link>
            <Link to={"/about"} className={`text-md ${LinkColor}`}>About me</Link>
          </div>

        </div>

        {/* Right Section - Button */}
        <div>
          <Button Btn_type={'primary'} Btn_text={'Join Telegram'} href={"/calls"} />
        </div>

      </div>


      <div className="myContainer h-15 flex justify-between items-center md:hidden">

        <div className="logo w-[80px]">
          <Link to={"/"} className="cursor-pointer">
            <p className="font-bold text-xl text-[var(--secondary)]">TWT</p>
          </Link>
        </div>

        <div className="menu_open z-50">
        {
          menuStatus === "close" ? 
            <div>
              <img src={menu_open} alt="" onClick={()=>toggleMenu()} className="cursor-pointer"/>
            </div>
          :
            <div className="w-full bg-[#252525] absolute h-full left-0 top-0 myContainer">

                <div className="h-15 flex justify-end items-center">
                  <img src={menu_close} alt="" onClick={()=>toggleMenu()} className="cursor-pointer w-8"/>
                </div>
                
                <div className="flex flex-col w-full">
                  <Link to={"/"} onClick={()=>toggleMenu()} className="text-white md:text-md text-3xl border-b-1 border-white !py-10 !px-2 flex w-full justify-between items-center">
                      Home
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.29412 1L15.8235 1.17647M15.8235 1.17647L16 13.7059M15.8235 1.17647L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </Link>
                  <Link to={"/about"} onClick={()=>toggleMenu()} className="text-white md:text-md text-3xl border-b-1 border-white !py-10 !px-2 flex w-full justify-between items-center">
                    About Us
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.29412 1L15.8235 1.17647M15.8235 1.17647L16 13.7059M15.8235 1.17647L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>  
                  <Link to={"/service"} onClick={()=>toggleMenu()} className="text-white md:text-md text-3xl border-b-1 border-white !py-10 !px-2 flex w-full justify-between items-center">
                    Services
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.29412 1L15.8235 1.17647M15.8235 1.17647L16 13.7059M15.8235 1.17647L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link to={"/contact"} onClick={()=>toggleMenu()} className="text-white md:text-md text-3xl !py-10 !px-2 flex w-full justify-between items-center">
                    Contact
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.29412 1L15.8235 1.17647M15.8235 1.17647L16 13.7059M15.8235 1.17647L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>

                <div className="!mt-10" onClick={()=>toggleMenu()}>
                  <Button Btn_text={"Join Telegram"} Btn_type={"primary"} href={"/calls"}></Button>
                </div>

            </div>
        }
        </div>

      </div>
    </>
  )
}

export default NavBar
