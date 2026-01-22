import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


function Contacts() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen  pt-36">
               <Contact/> 
            </div>
            <Footer />
        </>
    )
}

export default Contacts