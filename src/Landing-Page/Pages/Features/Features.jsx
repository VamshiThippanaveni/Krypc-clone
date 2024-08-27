import React, { useState } from 'react'
import './Features.css'
import frame from '../../../assets/Lines-Frame.png'
import correct_icon from '../../../assets/correct.svg'

const Features = () => {
    const[showMore,setShowMore] =useState(false)

    const handleToggle =()=>{
        setShowMore(!showMore)
    }
    
  return (
    <div className="features-container">
      <div className="top-container">
        <img src={frame} alt="" className="frame-bg" />
        <div className="grid-container">
          <div className="grid-item">
            <div className="grid-item-content">
              <img src={correct_icon} alt="" />
              <h4>Wallet Solution</h4>
              <p>
                Custodial, non-custodial, or <br />smart contract wallets solutions <br /> for your dApp projects
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-content">
              <img src={correct_icon} alt="" />
              <h4>NFT Studio</h4>
              <p>
                User Friendly NFT studio for <br />creation, management, and trading <br />of NFTs across various standards
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-content">
              <img src={correct_icon} alt="" />
              <h4>FT Manager</h4>
              <p>
                Tools for seamless creation and <br />management of Fungible Token with <br />dApps
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-content">
              <img src={correct_icon} alt="" />
              <h4>DID Storage</h4>
              <p>
                Easy to integrate and manage <br />Decentralized Identity. Enhanced <br />privacy and security
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
        {showMore ||(

      <div className="bottom-container">
        <img src={frame} alt="" className='frame-bottom'/>
        <div className="btm-grid-container">
            <div className="btm-grid-item">
                <div className="btm-grid-content">
                    <img src={correct_icon} alt="" />
                    <h4>Storage Manager</h4>
                    <p>
                    Leverage IPFS, ensure efficient <br />and reliable storage of files and <br />media assets
                    </p>
                </div>
            </div>
            <div className="btm-grid-item">
                <div className="btm-grid-content">
                    <img src={correct_icon} alt="" />
                    <h4>Smart Contract Studio</h4>
                    <p>
                    Create and deploy smart contracts <br />on EVM compatible chains with <br />pre-defined templates and APIs
                    </p>
                </div>
            </div>
            <div className="btm-grid-item">
                <div className="btm-grid-content">
                    <img src={correct_icon} alt="" />
                    <h4>Gasless Transactions</h4>
                    <br />
                    <p>
                    Execute transactions without the <br />need to pay for gas fee
                    </p>
                </div>
            </div>
            <div className="btm-grid-item">
                <div className="btm-grid-content">
                    <img src={correct_icon} alt="" />
                    <h4>Datalake</h4>
                    <p>
                    View and analyze Blockchain data <br />for business decisions and <br />reporting
                    </p>
                </div>
            </div>
        </div>
      </div>
        )}
      <button className="toggle-button" onClick={handleToggle}>
                {showMore ? 'Load More...' : 'Show less'}
        </button>
    </div>
  );
}

export default Features
