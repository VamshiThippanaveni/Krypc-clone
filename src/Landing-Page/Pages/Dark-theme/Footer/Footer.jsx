import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-title">
            <h2>Connect with our experts</h2>
            <p>Harness the competitive advantage of utilizing <br className='footer-p-break'/>Web3 Technologies for your business</p>
        </div>
        <div className="user-details">
            <input type="text" placeholder='Enter your name' />
            <input type="text" placeholder='Enter email address' />
            <button>Submit</button>
        </div>
        <div className="page-links1">
            <a href="">About us</a>
            <a href="">Pricing</a>
            <a href="">Career</a>
        </div>
        <div className="page-links2">
            <a href="">Documentation</a>
            <a href="">API References</a>
            <a href="">SDK References</a>
            <a href="">User Manual</a>
            <a href="">Blogs</a>
        </div>
        <br />
        <hr className='footer-hr'/>
        <div className="footers">
            <div className="footer-left">
                <a href="">©2024 Krypc Technologies Pvt. Ltd</a>
            </div>
            <div className="footer-right">
                <a href="">Privacy Policy</a>
                <a href="">Terms of use</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
