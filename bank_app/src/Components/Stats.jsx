import React from 'react'
import {stats} from "../constants"
import styles from "../styles"

const Stats = () => {
  return (
      <section className="flex flex-row justify-between items-center flex-wrap sm:mb-20 mb-6">
            {
              stats.map((stat)=>(
             <div className="flex flex-1 justify-start items-center sm:m-3 m-2 flex-row" key={stat.id}>
            <h1 className="font-poppins font-semibold xs:text-[41px] text-[15px] xs:leading-[53.16px] leading-[20px] text-white">{stat.value}</h1>
              <p className="font-poppins font-normal xs:text-[20.45px] text-[7px] xs:leading-[26.58px] leading-[10px] text-gradient uppercase sm:ml-3 ml-1">{stat.title}</p>
              </div>
              ))
            }

      </section>
  )
}

export default Stats