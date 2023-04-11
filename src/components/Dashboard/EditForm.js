import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Owner from '../../asset/pipOwner.png'
import phone from '../../asset/pipPhone.png'
import Email from '../../asset/pipEmail.png'
import Country from '../../asset/pipCountry.png'
import protectImage from '../../asset/protect.png'
import Axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function EditForm() {
  const { userid } = useParams();
  const [data, setData] = useState()
/*   const UserData =JSON.parse(localStorage.getItem("User")) */
  console.log("this is the userid",userid)
  


  const url = `https://preeminentcryptotrade.onrender.com/api/userdata/${userid}`

  useEffect(()=>{
    Axios.get(url)
    .then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
},[])

const mydata = {...data}
console.log("this is the datas",mydata)

  return (
    <MainContainer>
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
      <SecondContainer>
        <FormInput>
          <label>First Name</label>
          <FirstNameInput type="text"  defaultValue={mydata.firstName}/>
          <label>Last Name</label>
          <LastNameInput type="text" defaultValue={mydata.lastName} />
          <label>Email</label>
          <EmailInput type="email" defaultValue={mydata.email} />
          <label>Phone Number</label>
          <PhoneNumber type="text" defaultValue={mydata.phoneNumber} />
          <ButtonContainer>
            <button type="submit">Edit Profile</button>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
        <ProtectImage>
          <img src={protectImage} alt="img" />
        </ProtectImage>
    </MainContainer>
  )
}

export default EditForm
const AccountInfo = styled.section`
  display: flex;
  width: 100%;
  margin-top: 2%;
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

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SecondContainer = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  width: 95%;
  label {
    text-align: start;
    width: 98%;
    font-size: 12px;
  }
`
const FirstNameInput = styled.input`
  width: 95%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  color: gray;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const LastNameInput = styled.input`
  width: 95%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  color: gray;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const EmailInput = styled.input`
  width: 95%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  color: gray;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const PhoneNumber = styled.input`
  width: 95%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  color: gray;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
  button {
    height: 7vh;
    width: 45%;
    margin: 5% 0%;
    background: #1e90ff;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
    }
  }
  @media (max-width: 768px) {
    width: 93%;
    button {
      width: 55%;
      height: 9vh;
      margin-bottom: 5%;
    }
  }
`

const ProtectImage = styled.section`
  width: 100%;
  margin-bottom: 2%;
  img {
    width: 100%;
  }
`
