import React from 'react'
import './Pro.css'
import round_arrow from '../../../../assets/round-correct.png'

const Pro = () => {
  return (
    <div className='pro-container'>
      <p className="pro-p">Pro</p>
      <h1 className="enterprise">Enterprise</h1>
      <p className="need-p">Need more? Get in touch with us to explore a <br />fully tailored service that addresses your need</p>
      <div className="pro-items">
        <div className="pro-item">
            <img src={round_arrow} alt="" />
            Full Suit of Web3 Services
        </div>
        <div className="pro-item">
            <img src={round_arrow} alt="" />
            500K/month API Credits
        </div>
        <div className="pro-item">
            <img src={round_arrow} alt="" />
            Up to 20 Developers
        </div>
        <div className="pro-item">
            <img src={round_arrow} alt="" />
            Unlimited
        </div>
        <div className='pro-item'>
            View all
        </div>
      </div>
      <div className="btn-get-pro">
        <button>Contact Sales</button>
      </div>
    </div>
  )
}

export default Pro
