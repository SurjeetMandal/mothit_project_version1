import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Services from "../components/Services"

 
const Service = () => {
  return (
    <div>
      <NavBar LinkColor={"text-black"}/>
      <Services paddingTop={"lg:!pt-30 !pt-10"}/>
      <Footer marginTop={"!mt-40"} />
    </div>
  )
}

export default Service
