import React from 'react'
import ApplvappImg from '../../assets/Applvapp.svg'
import ApprefImg from '../../assets/Applref.svg'
import Appbot from '../../assets/Appbot.svg'
import Appdwn from '../../assets/Appdown.jpg'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../variants';
import Navbar2 from './Navbar2'

const Applhome = () => {
  return (
    <div>
        <Navbar2/>
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        >
          <h2 className=' mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'><center>New Applicants</center></h2>

          </motion.div>

        <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        
        className='mb-28'>
        <center><img src={Appbot} alt=""/></center>
        </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
            >
          <h2 className=' mx-auto  mt-4 md:text-4xl text-4xl font-bold text-blue-950 mb-6 leading-relaxed'><center>Here you can see the details of all the <span className="text-blue-600">new applicants</span> and <br/>accordingly you can<span className="text-blue-600"> refer them </span>to the<span className="text-blue-600">written exam. </span></center></h2>
          </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
            
            >

            
<div className="mt-20 ml-52  max-w-7xl ">
    <div className="flex flex-col lg:flex-row items-start max-w-full  ">
   <div className="w-full  ml-56 mb-20 ">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-10 max-w-full ">

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer   '>
                <div >
                    <img src={ApplvappImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>View Aew Applicants</h5>
                </div>
            </div>


            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 
            items-center flex justify-center hover:-translate-y-4 transition-all duration-300  cursor-pointer '>
                <div>
                    <img src={ApprefImg} alt=""/>
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Referring To The Exam</h5>
                </div>
            </div>

            </div>
        </div>

    </div>
    </div>

            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}

            className='mt-5'>
        <center><img src={Appdwn} alt=""  className=" md:w-10/12  lg:h-[300px]  "/></center>
        </motion.div>

    </div>
  )
}

export default Applhome;
