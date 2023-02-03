import React from 'react'
import styles , {layout} from "../styles"
import {quotes} from "../assets"



const FeedbackCard = ({key,content,name,title,img}) => {
  return (
    <section className="flex flex-col px-10 py-12 rounded-[20px] my-5 feedback-card max-w-[370px] sm:mr-5 md:mr-10 mr-0 ">
      <img src={quotes} alt="" className="object-contain w-[42px] h-[27px]"  />
     <p className="text-normal font-poppins text-dimWhite text-[18px] leading-[24px] my-10">
         {content}
     </p>

     <div className=" flex flex-row mt-2">
              <img src={img} alt="" className="object-contain w-[48px] h-[48px]" />
              <div className="flex flex-col  ml-4">
                <h3 className="text-semibold font-poppins text-white text-[18px]">{name}</h3>
                   <p className="text-normal font-poppins text-dimWhite text-[14px]">{title}</p>
              </div>
     </div>
       


    </section>
  )
}

export default FeedbackCard