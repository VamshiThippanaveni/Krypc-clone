import React from 'react'
import './Banner.css'
import Clients from '../Clients/Clients'
import Header from '../Header/Header'
import right_banner from '../../../assets/Right-banner.svg'

const Banner = () => {
  return (
    <div className='banner'>
        <Header/>
         <div className="banner-content">
        <div className="banner-context-left">
          <h1 className="banner-heading">
            Accelerate Your <br />Web3 Development Journey <br className="break"/> with  Advanced SDKs & APIs
          </h1>
          <div className="banner-docs">
            <p>
              Leverage the power of advanced APIs and SDKs. Experience the<br className="break"/>
              excitement of shaping the future of Web3 without the need for
              extensive<br className="break-docs"/>knowledge of protocols or frameworks in dApp development
            </p>
            <div className="buttons">
              <button className="button-getstart">Get Started</button>
              <button className="button-docs">View Docs</button>
            </div>
          </div>
        </div>
        <div className="banner-context-right">
          <img src={right_banner} alt="" />
        </div>
      </div>
      <Clients/>
    </div>
  )
}

export default Banner
