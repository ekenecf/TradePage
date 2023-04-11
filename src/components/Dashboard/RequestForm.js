import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import RequestDetails from './RequestDetails'

function RequestForm() {
  return (
    <div>
      <TopHeader />
      <BitconScr />
      <HeaderMenu />
      <BitconScr />
      <DepositDetail />
      <RequestDetails />
      <Eze />
    </div>
  )
}

export default RequestForm
