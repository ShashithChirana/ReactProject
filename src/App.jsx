
import './App.css'
import Campaigns from './components/Campaigns';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Attract from './components/Attract';
import Payments from './components/Payments';

function App() {
 

  return (
    <>
      {/*imponrt copmponents here*/}
      <Navbar/>
      <Home/>
      <Features/>
      <Campaigns/>
      <Attract/>
      <Payments/>
    </>
  )
}

export default App;
