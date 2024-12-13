import React from 'react'
import Intro from './Components/Intro'
import Tokenomics from './Components/Tokenomics'
import HTB from './Components/HTB'
import Links from './Components/Links'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div className="wrap">
        <Intro />
        {/* <Tokenomics /> */}
        {/* <HTB /> */}
        <Links />
        <Footer />
    </div>
  )
}
