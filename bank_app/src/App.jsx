import React from 'react'
import  styles from './styles'

import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import FeedbackCard from './Components/FeedbackCard'
import Testimonials from './Components/Testimonials'
import Clients from './Components/Clients'
import CardDeal from './Components/CardDeal'
import CTA from './Components/CTA'
import Stats from './Components/Stats'
import Billing from './Components/Billing'
import Buisness from './Components/Buisness'
import GetStarted from './Components/GetStarted'
import Button from './Components/Button'



const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Buisness />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA/>
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App;