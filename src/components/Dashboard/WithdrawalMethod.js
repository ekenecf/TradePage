import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import bitcoin from '../../asset/bitcoin(1).png'
import moneyGram from '../../asset/moneygramads-300x103.png'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import Axios from "axios"

function WithdrawalMethod() {
  const { userid } = useParams();
  const [data, setData] = useState()
  /* const UserData =JSON.parse(localStorage.getItem("User")) */
  // console.log("this is the data",data)

  const url = `https://elitegain.onrender.com/api/userdata/${userid}`

  useEffect(()=>{
    Axios.get(url)
    .then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
},[])

const mydata = {...data}
console.log("this is the datas",mydata)
  return (
    <DepositMethodContainer>
      <DepositMethodHeading>Select A Withdrawal Method</DepositMethodHeading>
      <PaymentMethods>
        <NavLink to="/request-bitcoin-withdrawal" state={{ withdraw: 'withdraw' }}>
          <img src={bitcoin} alt="bitcoinImage" />
        </NavLink>
        <NavLink to="/request-bank-withdrawal" state={{ withdraw: 'withdraw' }}>
          <p className="moneyG" src={moneyGram} alt="moneyGramImage">
            Bank Deposit
          </p>
        </NavLink>
      </PaymentMethods>
      <AccountBal>Your Account Balance: ${mydata.accountBalance}</AccountBal>

      <DepositTable>
        <tbody>
          <tr>
            <td>Account Balance:</td>
            <td>${mydata.accountBalance}</td>
          </tr>
          <tr>
            <td>Pending Withdrawals:</td>
            <td>$0.00</td>
          </tr>
        </tbody>
      </DepositTable>
      <AmountToBeWithdrawn>
        <h2>PROCESSING</h2>
        <h2>AVAILABLE</h2>
        <h2>PENDING WITHDRAW</h2>
        <h2>ADDRESS TO BE CREDITED</h2>
      </AmountToBeWithdrawn>
    </DepositMethodContainer>
  )
}

export default WithdrawalMethod

const DepositMethodContainer = styled.section``

const DepositMethodHeading = styled.h2`
  text-align: center;
  color: #2b4d6f;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const PaymentMethods = styled.div`
  height: 40vh;
  background: #f9f7f7;
  margin-inline: 7%;
  border: 2px solid #00add4;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    width: 70%;
    height: 8vh;
    text-decoration: none;

    .moneyG {
      width: 35%;
      height: 7vh;
      background: #000;
      color: #fff;
      font-size: 30px;
      text-align: center;
      border-radius: 15px;
    }
  }

  img {
    width: 30%;
    height: 15vh;
  }
  @media (max-width: 768px) {
    a {
      width: 100%;

      .moneyG {
        width: 55%;
        font-size: 25px;
        height: 6vh;
        margin: 0;
      }
    }
  }
`
const AccountBal = styled.h2`
  text-align: center;
  color: #2b4d6f;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const DepositTable = styled.table`
  width: 84%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-style: solid;
  color: #000000;
  margin-inline: 8%;

  thead {
    background: #ffcc00;
    width: 50%;
  }

  td {
    border-width: 1px;
    border-color: #13c4ea;
    border-style: solid;
    padding-left: 1%;
    height: 5vh;
    color: gray;
  }
`

const AmountToBeWithdrawn = styled.div`
  width: 84%;
  margin-inline: 8%;
  margin-top: 2%;
  background: #075aa6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: #ffff;
    font-size: 15px;
    border-left: 2px solid #fff;
    height: 6vh;
    margin: 0;
    padding: 10px;
  }
`
