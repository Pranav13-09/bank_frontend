import React from 'react'
import styles from '../styles'
import {discount,robot} from "../assets"
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className=" flex md:flex-row flex-col sm:py-16 py-6">

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

             <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 md:absolute md:top-40">
               <img src={discount} alt="" className="w-[32px] h-[32px]"/>
               <p className={`${styles.paragraph} ml-2`}>
                  <span className="text-white"> 20%</span> Discount  For  <span className="text-white">1 Month</span> Account
               </p>
             </div>


             <div className="flex flex-row items-center justify-between  w-full">

              <h1 className=' flex-1 font-semibold font-poppins   ss:text-[72px]  text-[52px] text-white ss:leading-[100px] leading-[72px]'>
                The Next  <br  className=" sm:block hidden"/><span className='text-gradient'> Generation </span>  {"  "}
              </h1>

              <div className="ss:flex hidden md:mr-4 mr-0">
                      <GetStarted/>
              </div>

             </div>

                <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full]'>
                {/* The Next  <br  className=" sm:block hidden"/><span className='text-gradient'> Generation </span>  {"  "} */}
                Payment Method
              </h1>

              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of experts uses a methodology to identify 
                 credit cards most likely to fit your needs.
                 We examine annual percentage rates, annual fees.
              </p>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
       <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]"/>
       <div className="absolute top-0 w-[40%] h-[40%] z-[0]  pink__gradient"/>
       <div className="absolute bottom-40 rounded-full w-[80%] h-[80%] z-[1]  white__gradient"/>
       <div className="absolute bottom-20 right-20 w-[50%] h-[50%] z-[0]  blue__gradient"/>
      </div>

      <div className={`sm:hidden ${styles.flexCenter}`} >
       <GetStarted/>
      </div>



    </section>
  )
}

export default Hero