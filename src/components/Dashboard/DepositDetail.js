import styled from "styled-components"
import Owner from '../../asset/pipOwner.png'
import phone from '../../asset/pipPhone.png'
import Email from '../../asset/pipEmail.png'
import Country from '../../asset/pipCountry.png'
import { useEffect, useState } from 'react'
import Axios from "axios"
import { useParams } from "react-router-dom";


function DepositDetail() {
  const { userid } = useParams();
  const [data, setData] = useState()
  /* const UserData =JSON.parse(localStorage.getItem("User")) */
  console.log("this is the data",data)

  const url = `https://preeminentcryptotrade.onrender.com/api/userdata/${userid}`

  useEffect(()=>{
    Axios.get(url)
    .then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
},[])
/*   console.log("This is user data",UserData.data) */
const mydata = {...data}
console.log("this is the datas",mydata)

  return (
    <AccountInfo>
      <AccountType>
        <img src={Owner} alt="img" />
        <div>
          <h3>ACCOUNT</h3>
       {/*    <p>BITCOIN INVESTMENT</p> */}
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
          {/* <p>mozambique</p> */}
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
  )
}

export default DepositDetail

const AccountInfo = styled.section`
  display: flex;
  margin-top: 3%;
  height: 15vh;
  gap: 0.1%;
  padding-inline: 5%;
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