import Banner from '@/components/Banner'
import Clientss from '@/components/Clientss'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import OurBread from '@/components/OurBread'
import OurMenus from '@/components/OurMenus'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
    <OurBread />
    <WhyUs />
    <OurMenus />
    <Banner />
    <Clientss/>
    <Contact /> 
    
    </>
  )
}

export default page
