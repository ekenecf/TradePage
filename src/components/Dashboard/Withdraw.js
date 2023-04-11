import { useEffect } from 'react'
import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import WithdrawalMethod from './WithdrawalMethod'

const Withdraw = ({ Display }) => {

    useEffect(()=>{

        /* eslint-disable-next-line no-unused-expressions */
        return Display
        /* eslint-disable-next-line  react-hooks/exhaustive-deps */
      },[])

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <DepositDetail />
        <WithdrawalMethod />
        <Eze />
    </div>
  )
}

export default Withdraw
