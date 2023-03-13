import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Stream from '../components/stream/Stream'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Stream />
    </>
  )
}

export default Home