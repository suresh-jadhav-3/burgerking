import React from 'react'
import Hero from './subHome/Hero'
import Service from './subHome/Service'
import Offer from './subHome/Offer'
import AppStore from './subHome/AppStore'
import Testimonial from './subHome/Testimonial'

function Home() {
  return (
    <div>
      <Hero/>
      <Service/>
      <Offer/>
      <AppStore/>
      <Testimonial/>
    </div>
  )
}

export default Home