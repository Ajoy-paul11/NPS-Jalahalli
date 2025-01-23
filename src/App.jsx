import { Button } from "./components/ui/button";
import FormAdmission from "./components/Form/Form";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" bg-[#f4f5ff] min-h-screen overflow-hidden">
        <HeroSection />
        {/* <div className=" shadow-lg shadow-[#7b7878] py-6 px-8 rounded-lg w-1/4">
          
        </div> */}
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;