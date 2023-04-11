import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import RequestWithDrawalBitcoin from './RequestWithdrawalBitcoin'

function RequestBitcoinWithdraw( { Display }) {
  return (
    <div>
      <TopHeader />
      <BitconScr />
      <HeaderMenu />
      <BitconScr />
      <DepositDetail />
      <RequestWithDrawalBitcoin Display = {Display} />
      <Eze />
    </div>
  )
}

export default RequestBitcoinWithdraw
