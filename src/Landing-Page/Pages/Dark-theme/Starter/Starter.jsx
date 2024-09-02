import React from 'react'
import './Starter.css'
import round_arrow from '../../../../assets/round-correct.png'

const Starter = () => {
  return (
    <div className='starter-container'>
      <p className='starter-p'>Starter</p>
      <h1 className='free'>Free</h1>
      <p className='access-p'>Access a broader range of features and <br />tools that empower your projects</p>
      <div className="free-items">
        <div className="free-item">
            <img src={round_arrow} alt="" />
            Starter Web3 Services
        </div>
        <div className="free-item">
            <img src={round_arrow} alt="" />
            50K/month API Credits
        </div>
        <div className="free-item">
            <img src={round_arrow} alt="" />
            For personal use
        </div>
        <div className="free-item">
            <img src={round_arrow} alt="" />
            Up to 5 projects
        </div>
        <div className='free-item'>
            View all
        </div>
      </div>
      <div className="btn-get-started">
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Starter
