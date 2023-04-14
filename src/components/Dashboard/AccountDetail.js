import styled from 'styled-components'
import { useLocation, NavLink } from 'react-router-dom'
import Owner from '../../asset/pipOwner.png'
import phone from '../../asset/pipPhone.png'
import Email from '../../asset/pipEmail.png'
import Country from '../../asset/pipCountry.png'
import Bag from '../../asset/pipBag.png'
import pipMoney from '../../asset/pipMoney.png'
import EarnedMoney from '../../asset/Earned-money.png'
import head from '../../asset/head.png'
import protectImage from '../../asset/protect.png'
import Axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


function AccountDetail() {
  const { userid } = useParams();
  const [data, setData] = useState()
/*   const UserData =JSON.parse(localStorage.getItem("User")) */
  // console.log("this is the userid",userid)
  


  const url = `https://elitegain.onrender.com/api/userdata/${userid}`

  useEffect(()=>{
    Axios.get(url)
    .then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
},[])

const mydata = {...data}
// console.log("this is the data",mydata)

  const location = useLocation()
  const { edit } = location.state || {}
  console.log(edit)


  return (
    <AccountContainer>
      <p>Welcome: {mydata.firstName} {mydata.lastName}</p>
      <AccountInfo>
        <AccountType>
          <img src={Owner} alt="img" />
          <div>
            <h3>ACCOUNT</h3>
            <p>{mydata.plan}</p>
          </div>
        </AccountType>
        <AccountEmail>
          <img src={Email} alt="img" />
          <div>
            <h3>EMAIL</h3>
            <p>{mydata.email}</p>
          </div>
        </AccountEmail>
        <AccountCountry>
          <img src={Country} alt="img" />
          <div>
            <h3>COUNTRY</h3>
            <p>{mydata.country}</p>
          </div>
        </AccountCountry>
        <AccountPhone>
          <img src={phone} alt="img" />
          <div>
            <h3>PHONE:</h3>
            <p>{mydata.phoneNumber}</p>
          </div>
        </AccountPhone>
      </AccountInfo>
      <MoneyInfo>
        <AccountBalance>
          <img src={Bag} alt="bag" />
          <p>${mydata.accountBalance}</p>
          <big>ACCOUNT BALANCE</big>
        </AccountBalance>
        <TotalEarned>
          <img src={pipMoney} alt="bag" />
          <p>${mydata.totalEarned}</p>
          <big>TOTAL EARNED</big>
        </TotalEarned>
        <StartUp>
          <img src={EarnedMoney} alt="bag" />
          <p>${mydata.startUpDeposit}</p>
          <big>START-UP DEPOSIT</big>
        </StartUp>
      </MoneyInfo>

      <UpgradeAccount>
        <LastDeposit>
          <img src={head} alt="imag" />
          <small>${mydata.lastDeposit}</small>
          <div>
            <p>LAST DEPOSIT</p>
          </div>
          <button>LAST DEPOSIT</button>
        </LastDeposit>
        <Withdraw>
          <img src={head} alt="imag" />
          <small>$0.000</small>
          <div>
            <p>TOTAL WIDRAWN</p>
          </div>
          <button>
          <NavLink to={`/withdraw/${userid}`} state={{ withdraw: 'withdraw' }} style={{textDecoration:"none", color:"white"}}>
            WITHDRAW
          </NavLink>
          </button>
        </Withdraw>
        <NewDeposit>
          <img src={head} alt="imag" />
          <small>${mydata.totalDeposit}</small>
          <div>
            <p>TOTAL DEPOSIT</p>
          </div>
          <button>
          <NavLink to={`/deposit/${userid}`}   state={{ deposit: 'deposit' }} style={{textDecoration:"none", color:"white"}}>
          MAKE NEW DEPOSIT
          </NavLink>
            </button>
        </NewDeposit>
      </UpgradeAccount>
        {/* {<ForexCrossRates/>} */}
      <ProtectImage>
        <img src={protectImage} alt="img" />
      </ProtectImage>
        {/* <Advanced/> */}
    </AccountContainer>
  )
}

export default AccountDetail

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4% 6% 0 6%;

  p {
    font-size: 25px;
    font-weight: 500;
    margin: 0 0 2% 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 13px;
    }
  }
`

const AccountInfo = styled.section`
  display: flex;

  height: 15vh;
  gap: 0.1%;
  @media (max-width: 768px) {
    gap: 0.4%;
  }
`

const AccountType = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  align-items: center;
  gap: 4%;
  div {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      font-size: 22px;
      color: #fff;
    }
    p {
      font-size: 17px;
      color: #fff;
      margin: 2% 0 0 0;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
  @media (max-width: 768px) {
    img {
      height: 4vh;
    }
    div {
      h3 {
        font-size: 10px;
      }
      p {
        font-size: 8px;
      }
    }
  }
`

const AccountEmail = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  align-items: center;
  gap: 4%;
  div {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      font-size: 22px;
      color: #fff;
    }
    p {
      font-size: 17px;
      color: #fff;
      margin: 2% 0 0 0;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
  @media (max-width: 768px) {
    img {
      height: 4vh;
    }
    div {
      h3 {
        font-size: 10px;
      }
      p {
        font-size: 8px;
      }
    }
  }
`

const AccountCountry = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  align-items: center;
  gap: 4%;
  div {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      font-size: 22px;
      color: #fff;
    }
    p {
      font-size: 17px;
      color: #fff;
      margin: 2% 0 0 0;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
  @media (max-width: 768px) {
    img {
      height: 4vh;
    }
    div {
      h3 {
        font-size: 10px;
      }
      p {
        font-size: 8px;
      }
    }
  }
`

const AccountPhone = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  align-items: center;
  gap: 4%;
  div {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      font-size: 22px;
      color: #fff;
    }
    p {
      font-size: 17px;
      color: #fff;
      margin: 2% 0 0 0;
  
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
  @media (max-width: 768px) {
    img {
      height: 4vh;
    }
    div {
      h3 {
        font-size: 10px;
      }
      p {
        font-size: 8px;
      }
    }
  }
`

const MoneyInfo = styled.section`
  display: flex;
  margin-top: 2%;
  gap: 2%;
`

const AccountBalance = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-webkit-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-moz-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    height: 20vh;
    big {
      font-size: 10px;
    }
  }
`

const TotalEarned = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-webkit-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-moz-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);

  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    height: 20vh;
    big {
      font-size: 10px;
    }
  }
`

const StartUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-webkit-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);
-moz-box-shadow: -6px 8px 5px -7px rgba(0,0,0,0.23);

  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    height: 20vh;
    big {
      font-size: 10px;
    }
  }
`

const UpgradeAccount = styled.section`
  height: 40vh;
  margin-top: 4%;
  display: flex;
  gap: 2%;
  margin-bottom: 7%;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 18%;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 28vh;
  }
`

/* const UserPackage = styled.div`
  background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1120px) {
    small {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 33%;

    small {
      font-size: 6.7px;
    }
    div {
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
` */

const LastDeposit = styled.div`
  background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }

  @media (max-width: 768px) {
    width: 32%;
    small {
      font-size: 6.7px;
    }
    div {
      margin: 5% 0;
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

const Withdraw = styled.div`
  background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
  @media (max-width: 768px) {
    width: 31%;

    small {
      font-size: 6.7px;
    }
    div {
      margin: 5% 0;
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

const NewDeposit = styled.div`
  background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #529777;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
  @media (max-width: 768px) {
    width: 30%;
    margin-top: 3%;
    small {
      font-size: 6.7px;
    }
    div {
      margin: 5% 0;
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

const ProtectImage = styled.section`
  img {
    width: 100%;
  }
`
