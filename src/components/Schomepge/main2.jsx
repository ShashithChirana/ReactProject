import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Attract from "./Attract";
import Features from "./Features";
import Campaigns from "./Campaigns";
import Payments from "./Payments";
import Footer from "../Footer/Footer";
import Exhome from "../Exampage/Exhome";
import Navbar2 from "../Applipge/Navbar2";
import Schedhome from "../Schedpage/Schedhome";
import Camp from "../Campaignpage/Camp";
import Payhome from "../Paymentpage/Payhome";


const Navigate=()=>{
    return(
        <div>
           {/* <Navbar/>
            <Home/>
            <Features/>
            <Campaigns/>
            <Attract/>
            <Payments/>
            <Footer/>*/}

            <Navbar2/>
            <Exhome/>
            
        </div>
    )
}

export default Navigate;