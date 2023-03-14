import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Partner from '../components/partner/Partner'
import Stream from '../components/stream/Stream'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Stream />
        <Partner />
    </>
  )
}

export default Home