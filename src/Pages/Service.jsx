import Footer from "../components/Footer"
import HowItWork from "../components/HowItWork"
import NavBar from "../components/NavBar"
import Services from "../components/Services"

 
const Service = () => {
  return (
    <div>
      <NavBar LinkColor={"text-black"}/>
      <Services paddingTop={"!pt-24"}/>
      <HowItWork />
      <Footer marginTop={"!mt-40"} />
    </div>
  )
}

export default Service
