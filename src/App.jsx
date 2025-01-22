import { Button } from "./components/ui/button"
import FormAdmission from "./components/Form/Form"

function App() {

  return (
    <>
    <div className="flex items-center justify-center bg-[#181818] h-screen">
      <div className=" shadow-lg shadow-[#7b7878] py-6 px-8 rounded-lg">
      <FormAdmission />
      </div>
    </div>
    </>
  )
}

export default App
