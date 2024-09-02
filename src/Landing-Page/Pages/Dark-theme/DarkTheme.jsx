import React from 'react'
import './DarkTheme.css'
import GetStarted from './Get-started/GetStarted'
import Starter from './Starter/Starter'
import Developer from './Developer/Developer'
import Pro from './Pro/Pro'
import BuildDApp from './Build-DApp/BuildDApp'
import WorkspaceImg from './Workspace-img/WorkspaceImg'
import Enterprise from './Enterprise/Enterprise'
import Footer from './Footer/Footer'

const DarkTheme = () => {
  return (
    <div className='dark-theme'>
      <GetStarted/>
      <Starter/>
      <Developer/>
      <Pro/>
      <BuildDApp/>
      <WorkspaceImg/>
      <Enterprise/>
      <Footer/>
    </div>
  )
}

export default DarkTheme
