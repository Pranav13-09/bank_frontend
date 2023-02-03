import React from 'react'
import styles from "../styles"
import {arrowUp} from "../assets"

const GetStarted = () => {
  return (
         <div className={`${styles.flexCenter}  w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%]  h-[100%]` }>
             
               <div className={`${styles.flexCenter} flex-start flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt=""  className=" h-[23px] w-[23px] ml-2 object-contain"/>

               </div>

                <div className={`${styles.flexCenter} flex-start flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
               </div>

               


             

            </div>

         </div>
  )
}

export default GetStarted