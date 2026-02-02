import './App.css'
import Signup from './Components/Signup'
import Contacts from './contact/Contacts'
import { useAuth } from './context/authProvider'
import Courses from './cousrses/Courses'
import Home from './home/Home'
import { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from "react-router-dom"


function App() {
      const[authUser, setauthUser]=useAuth()
    console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/couser' element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
        <Toaster />

      </div>

    </>
  )
}

export default App
