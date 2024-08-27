import React from 'react'
import './LandingPage.css'
import Banner from './Pages/Banner/Banner'
import DApp from './Pages/dApp/DApp'
import FeatureHead from './Pages/Features-head/FeatureHead'
import Features from './Pages/Features/Features'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Banner/>
      <DApp/>
      <FeatureHead/>
      <Features/>
    </div>
  )
}

export default LandingPage
