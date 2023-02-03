import React from 'react'
import {apple,bill,google} from "../assets"
import styles ,{layout} from "../styles"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
       < div className={`mt-10 md:mt-0 flex justify-center items-center sm:items-start md:mr-10 relative`}>
           <img src={bill} alt="" className={`object-contain w-[90%] h-[90%]  z-[5]`}/>
           <div className={`absolute z-[3]  top-0 w-[50%] -left-1/2 h-[50%] white__gradient`}/>
           <div className={`absolute z-[0]  bottom-0 w-[50%] -left-1/2 h-[50%] pink__gradient`}/>
       </div>

{/* flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative */}

      <div className={`sm:-ml-4 pt-8`}>
        <h1 className={`font-semibold font-poppins ss:text-[40px]  text-[40px] text-white ss:leading-[76px] leading-[66px] w-full`}>
              Easily control your <br className={`sm:block hidden`}/>billing & invoicing.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
           
           <div className={`flex flex-start flex-wrap flex-row  mt-6 sm:mt-12`}>
              <img src={google} alt="" className='w-[128px] h-[42px] object-contain mr-2'/>

               <img src={apple} alt=""  className='w-[128px] h-[42px] object-contain '/>

           </div>


      </div>

    </section>

  )
}

export default Billing