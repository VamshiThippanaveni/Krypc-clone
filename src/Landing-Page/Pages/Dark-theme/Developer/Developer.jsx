import React from 'react'
import './Developer.css'
import round_arrow from '../../../../assets/round-correct.png'

const Developer = () => {
  return (
    <div className="developer-container">
      <p className="developer-p">Developer</p>
      <h1 className="currency">$99/ month</h1>
      <p className="unlock-p">
        Unlock a suite of premium features <br />
        tailored for professional teams
      </p>
      <div className="dev-items">
        <div className="dev-item">
          <img src={round_arrow} alt="" />
          Advanced Web3 Services
        </div>
        <div className="dev-item">
          <img src={round_arrow} alt="" />
          250K/month API Credits
        </div>
        <div className="dev-item">
          <img src={round_arrow} alt="" />
          For personal use
        </div>
        <div className="dev-item">
          <img src={round_arrow} alt="" />
          Unlimited
        </div>
        <div className='dev-item'>
            View all
        </div>
      </div>
      <div className="btn-get-dev">
        <button>Try now</button>
      </div>
    </div>
  );
}

export default Developer
