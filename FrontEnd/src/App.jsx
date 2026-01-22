import './App.css'
import Signup from './Components/Signup'
import Contacts from './contact/Contacts'
import Courses from './cousrses/Courses'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/couser' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contacts/>}/>
       </Routes>

      </div>

    </>
  )
}

export default App
