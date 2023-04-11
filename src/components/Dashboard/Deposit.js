import React from "react"
import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import DepositMethod from "./DepositMethod"

function Deposit() {

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <DepositDetail />
        <DepositMethod />
        <Eze />
    </div>
  )
}

export default Deposit
