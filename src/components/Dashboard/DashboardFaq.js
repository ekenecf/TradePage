import React from "react"
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import DashboardFaqs from "./DashboardFaqs"
import Eze from './Eze'

function DashboardFaq() {

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <DashboardFaqs />
        <Eze />
    </div>
  )
}

export default DashboardFaq
