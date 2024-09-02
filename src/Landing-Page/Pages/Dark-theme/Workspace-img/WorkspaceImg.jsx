import React from 'react'
import './WorkspaceImg.css'
import workspace_img from'../../../../assets/workspace-img.png'
import dev_community from '../../../../assets/dev-community.png'
import telegram from '../../../../assets/telegram.png'

const WorkspaceImg = () => {
  return (
    <div className="workspace">
      <div className="workspace-container">
        <img src={workspace_img} alt="" />
        <button>Get Started for Free</button>
      </div>
      <div className="documentation">
        <h5>Documentation</h5>
        <p>Get familiar with all the features or <br />
        learn how to start integrating them</p>
        <div className="documentation-buttons">
            <button className='btn-one'>View Docs</button>
            <button className='btn-two'>Github</button>
        </div>
      </div>
      <div className="explore">
        <div className="social-media-icons">
            <img src={dev_community} alt="" />
            <img src={telegram} alt="" />
        </div>
        <div className="explore-community">
            <p>Go beyond the website, <br />
            Explore more in our Community</p>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceImg
