import React from 'react'

const Button = ({styles}) => {
  return (
     <button type="button"  className={`py-4 px-6 bg-blue-gradient rounded full outline-none text-[1rem] font-poppins font-medium text-primary ${styles}`}>
    Get Started
     </button>
  )
}

export default Button