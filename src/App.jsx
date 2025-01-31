import { Button } from "./components/ui/button";
import FormAdmission from "./components/Form/Form";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "./components/Footer";
import School from "./components/School";
import Facilities from "./components/Facilities";

function App() {
  return (
    <>
      <div className=" bg-[#f4f5ff] min-h-screen overflow-hidden font-poppins">
        <HeroSection />
        <School />
        <hr className=" border-blue-100"/>
        <About />
        <Facilities />
        <Footer />
      </div>
    </>
  );
}

export default App;