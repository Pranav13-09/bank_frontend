import React from 'react'
import styles ,{layout} from "../styles"
import {features} from "../constants/index"
import Button from './Button'


const Buisness = () => {
  return (
      <section className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
              <h1 className= "font-poppins font-semibold ss:text-[48px]  text-[40px] text-white ss:leading-[76px] leading-[66px] w-full">
                You do the business, 
                <br />
                we’ll handle the money.
              </h1>

              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                 With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.
                  But with hundreds of credit cards on the market.
              </p>

              <Button styles="mt-10"/>
         


            </div>









            <div className={`${layout.sectionImg} flex-col` }>
                   {
                       features.map((feature,index)=>(
                        <div className={`flex flex-row  p-6 rounded-[20px]  ${index!==feature.length-1 ?  'mb-10' :'mb-0' } feature-card`} key={feature.id}>
                                <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
                       <img src={feature.icon} alt="" className={`w-[50%] h-[50%] object-contain`}/>
                                </div>
                                <div className={`flex flex-col ml-4`}>
                                    <h1 className={`text-white font-poppins font-semibold  mb-1 text-[1rem] leading-[23px]`}>{feature.title}</h1>
                                    <p className={`text-white font-poppins font-normal   text-[0.8rem] leading-[18px]`}>{feature.content}</p>
                                </div>


                          </div>


                       ))


                   }

            </div>

      </section>
  )
}

export default Buisness