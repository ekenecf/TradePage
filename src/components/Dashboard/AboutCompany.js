import React from "react"
// import { useLocation } from 'react-router-dom'
import TopHeader from './TopHeader'
// import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
// import EditForm from "./EditForm"
import About from "./About"
import Eze from './Eze'

function AboutCompany() {

  return (
    <div>
        <TopHeader/>
        {/* <BitconScr/> */}
        <HeaderMenu/>
        {/* <BitconScr/> */}
        <About />
        <Eze />
    </div>
  )
}

export default AboutCompany
