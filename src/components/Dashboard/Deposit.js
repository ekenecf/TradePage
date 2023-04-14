import React, { useEffect } from "react"
// import { useLocation } from "react-router-dom"
import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import DepositMethod from "./DepositMethod"

function Deposit({ Display }) {
  // const location = useLocation()
  // console.log("This is location", location)

  useEffect(()=>{
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])

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
