import React from 'react'
import './Enterprise.css'
import enterprise_bg from '../../../../assets/enterprise-bg.png'

const Enterprise = () => {
  return (
    <div className='enterprise-container'>
      <div className="enterprise-bg">
        <img src={enterprise_bg} alt="" />
      </div>
      <div className="enterprise-heading">
        <h1>For Enterprise</h1>
        <p>Transform your business with Krypcore Web3</p>
      </div>
      <div className="enterprise-button">
        <button>Contact Sales</button>
      </div>
      <div className="enterprise-grids">
        <div className="grid-1">
        <h3>Multifaceted <br />Web3 Use Cases</h3>
        <p>From NFTs and DeFi to Gaming and <br />Infrastructure, our platform empowers <br />you to innovate effortlessly</p>
        </div>
        <div className="grid-2">
        <h3>Customizable Workflows</h3>
        <p>Design custom workflows to match <br />your unique business requirements</p>
        </div>
        <div className="grid-3">
        <h3>Expert Support Team</h3>
        <p>Experience unparalleled support with our dedicated team guiding you at <br />every step</p>
        </div>
        <div className="grid-4">
        <h3>Limitless Scalability</h3>
        <p>Designed to handle increased demand <br />without compromising performance</p>
        </div>
        <div className="grid-5">
        <h3>Security & regulatory <br />compliance</h3>
        <p>Prioritizing security with SOC2 compliance. Our robust measures ensure data integrity and user privacy</p>
        </div>
        <div className="grid-6">
        <h3>Streamlined Collaboration</h3>
        <p>Collaborate with teams, enhance communication, and align resources effortlessly for your enterprise's Web3 success</p>
        </div>
      </div>
    </div>
  )
}

export default Enterprise
