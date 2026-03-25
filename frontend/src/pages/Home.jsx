import React from 'react'
import Hero from '../sections/Hero'
import ServicesPreview from '../sections/ServicesPreview'
import PortfolioPreview from '../sections/PortfolioPreview'
import Process from '../sections/Process'
import Testemonials from '../sections/Testemonials'
import CTA from '../sections/CTA'

function Home() {
  return (
    <>
      <Hero />
      <PortfolioPreview />  
      <Process />
      <Testemonials />
      <CTA />
    </>
  )
}

export default Home