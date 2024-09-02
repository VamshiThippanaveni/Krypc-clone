import React from 'react'
import './LandingPage.css'
import Banner from './Pages/Banner/Banner'
import DApp from './Pages/dApp/DApp'
import FeatureHead from './Pages/Features-head/FeatureHead'
import Features from './Pages/Features/Features'
import Apisdk from './Pages/Api-Sdk/Apisdk'
import DarkTheme from './Pages/Dark-theme/DarkTheme'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Banner/>
      <DApp/>
      <FeatureHead/>
      <Features/>
      <Apisdk/>
      <DarkTheme/>
    </div>
  )
}

export default LandingPage
