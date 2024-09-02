import React from 'react'
import './Header.css'
import krypclogo from '../../../assets/krypcore-logo 1.png'
import icon from '../../../assets/Icon.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src={krypclogo} alt="krypclogo" />
        </div>
        <div className="header-middle">
          <a href="#developers" className="header-link">
            For Developers
          </a>
          <a href="#enterprisers" className="header-link">
            For Enterprise
          </a>
        </div>
        <div className="header-right">
          <a href="#resources" className="resource">
            Resources
          </a>
          <span className="header-divider">|</span>
          <a href="#sign-in" className="sign-in">
            Sign in
          </a>
          <button>Get Started</button>
        </div>
        <div className="menu-icon">
          <img src={icon} alt="Menu Icon" />
        </div>
      </div>
    </div>
  );
}

export default Header
