import About from "../components/About"
import Course from "../components/Course"
import Header from "../components/Header"
import Offering from "../components/Offering"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <>
      <NavBar LinkColor={"text-black"}/>
      <Header />
      <Offering />
      <Course />
      <About />
      <Testimonials />
      <Footer marginTop={"!mt-40"} />
    </>
  )
}

export default Home
