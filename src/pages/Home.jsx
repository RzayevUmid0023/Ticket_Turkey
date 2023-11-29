import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Home page components/Navbar/Navbar'
import Slide from '../components/Home page components/Slide/Slide'
import Concert from '../components/Home page components/Concert/Concert'
import Footer from '../components/Home page components/Footer/Footer'
import Films from '../components/Home page components/Theater/Theater'
import Theater from '../components/Home page components/Theater/Theater';

function Home() {

  return (
    <>
      <Navbar/>
      <Slide />
      <Concert />
      <Theater />
      <Footer />
      
    </>
  )
}

export default Home