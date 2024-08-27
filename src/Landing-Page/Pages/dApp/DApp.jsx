import React from 'react'
import './DApp.css'
import line_frame from '../../../assets/Lines-Frame.png'
import num1 from '../../../assets/10x.png'
import num2 from '../../../assets/50perc.png'
import num3 from '../../../assets/3x.png'
import architecture from '../../../assets/Architecture 1.png'

const DApp = () => {
  return (
    <div className="container">
      <div className="left-container">
        <h2 className="left-header">One Stop Platform for dApp Development</h2>
        <p className="description">
          <p className="p1">
            Create and deploy decentralized applications (dApps) across diverse
            blockchain networks
          </p>
          <br />
          <p className="p2">
            Benefit from our cutting-edge infrastructure featuring <br />{" "}
            flexible endpoints, customizable node options, and <br />
            extensive blockchain/storage support
          </p>
        </p>
      </div>
      <div className="frame">
        <img src={line_frame} alt="Line frame" className="line-frame" />
        <div className="nums">
          <div className="num-item">
            <img src={num1} alt="Number 1" className="num1" />
            <p className="num-text">Faster Cross Chain Integration</p>
          </div>
          <div className="num-item">
            <img src={num2} alt="Number 2" className="num2" />
            <p className="num-text">Reduction in Development Time</p>
          </div>
          <div className="num-item">
            <img src={num3} alt="Number 3" className="num3" />
            <p className="num-text">Scalable when Compared to Competitors</p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src={architecture} alt="" />
      </div>
    </div>
  );
}

export default DApp
