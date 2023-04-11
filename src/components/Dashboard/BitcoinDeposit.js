import React from "react"
// import { useLocation } from 'react-router-dom'
import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import BitcoinWallet from "./BitcoinWallet"

function BitcoinDeposit() {

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <DepositDetail />
        <BitcoinWallet />
        <Eze />
    </div>
  )
}

export default BitcoinDeposit
