import React from 'react'
import './Apisdk.css'
import roundarrow from '../../../assets/round-correct.png'
import carbon_one from '../../../assets/carbon1.png'
import carbon_two from '../../../assets/carbon2.png'

const Apisdk = () => {
  return (
    <div className="api-sdk">
      <div className="api-sdk-header">
        <p>EXPLORE API/ SDKs</p>
        <h2>Everything you need to begin with</h2>
      </div>
      <div className="api-sdk-container">
        <div className="api-card">
          <h1>APIs</h1>
          <p>
            A comprehensive set of API’s to build <br />
            and interact with Web3 applications
          </p>
          <div className="api-frame">
            <div className="api-item">
              <img src={roundarrow} alt="" />
              Wallet API
            </div>
            <div className="api-item">
              <img src={roundarrow} alt="" />
              Smart Contact API
            </div>
            <div className="api-item">
              <img src={roundarrow} alt="" />
              Identify API
            </div>
            <div className="api-item">
              <img src={roundarrow} alt="" />
              Storage API
            </div>
            <div className="api-item">
              <img src={roundarrow} alt="" />
              Analytics API
            </div>
            <button>Explore all APIs</button>
          </div>
          <div className="carbons-container">
            <div className="carbon-one">
                <img src={carbon_one} alt="" />
            </div>
            <div className="carbon-two">
                <img src={carbon_two} alt="" />
            </div>
          </div>
        </div>
        <div className="sdk-card">
          <h1>SDK</h1>
          <p>
            Supercharge Your dApp Development <br />
            with Krypcore Web3 SDK
          </p>
          <a href="">Visit Github</a>
          <div className="sdk-input">
            <input
              type="text"
              placeholder="npm i @krypc/krypcore-web3-sdk"
            />
            <button>View Docs</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Apisdk
