import React from 'react'
import Banner from '../components/ConsertAbout/ConcertPageAbout/ConcertAboutPageBanner'
import Price from '../components/ConsertAbout/ConcertAboutPagePrice/ConcertAboutPagePrice'
import Navbar from '../components/Home page components/Navbar/Navbar'
import Footer from '../components/Home page components/Footer/Footer'


function ConsertAbout() {
  return (
    
      <>
        <Navbar />
        <Banner/>
        <Price />
        <Footer/>
      </>
     
  )
}

export default ConsertAbout