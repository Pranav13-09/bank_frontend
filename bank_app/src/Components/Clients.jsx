import React from 'react'
import {clients} from "../constants"
import styles from "../styles"

const Clients = () => {
  return (
      <section className="flex flex-row justify-center items-center my-4">
        <div className={`w-full flex-wrap ${styles.flexCenter}`}>
                         {clients.map((client,index)=>(
                          <img src={client.logo} alt=""  className={`object-contain h-[60px] w-[160px]  sm:ml-10 ml-4 mt-4 sm:mt-0`}/>
                          ))}
        </div>
  

      </section>
  )
}

export default Clients