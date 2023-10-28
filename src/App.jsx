import { BrowserRouter, Route, Routes } from "react-router-dom"

import Applhome from "./components/Applipge/Applhome"
import Navigate from "./components/Schomepge/main2"
import Schedhome from "./components/Schedpage/Schedhome"
import Camp from "./components/Campaignpage/Camp"
import Payhome from "./components/Paymentpage/Payhome"
import Exhome from "./components/Exampage/Exhome"



function App() {
  

  return (
    <div className='App'>


      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate/>}/>
          <Route path="/appli" element={<Applhome/>}/>
          <Route path="/schedule" element={<Schedhome/>}/>
          <Route path="/Camp" element={<Camp/>}/>
          <Route path="/pay"  element={<Payhome/>}/>
          <Route path="/exm" element={<Exhome/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
