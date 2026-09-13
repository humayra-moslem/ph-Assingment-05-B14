import { Suspense } from "react"
import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technologies from "./Component/Technology/Technologies";
import type { Itechtype } from "./Component/types/techtype";
import Footer from "./Component/Footer";

function App() {
    const techFetch = async():Promise<Itechtype[]>=> {
    const res = await fetch ("/data.json")
    const data = await res.json()
    return data ;
    }

    console.log(techFetch);
   const techpromise = techFetch()

  return (
    <>
     <Navbar/>
     <Banner/>
     <Suspense fallback ={<h2>loading.....</h2>}>
    <Technologies techpromise ={techpromise}/>
   </Suspense>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
      <Footer/>
    </>
  )
}

export default App;


