import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Axios from 'axios';
import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';


function RequestDetails() {

  const { userid } = useParams();

  const [email, setEmail] = useState("")
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastName] = useState("")
  const [depositMethod, setDepositmethod] = useState("")
  const [phoneNumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://elitegain.onrender.com/api/requestaccount/${userid}`
  const Data = {email, firstName, lastName, depositMethod, phoneNumber}

  const requestDeposit = (e) => {
    e.preventDefault()
    
    console.log(Data)
    setLoading(true)
    Axios.post(url,Data)
    .then((res) => {
      console.log(res, "res from first then")
      Swal.fire({
        icon: 'success',
        title: 'Success😍...',
        text: res.data.message,
     }) 
      setLoading(false)
    })
    .catch((error)=>{
    setLoading(false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
   }) 
    console.log(error)
  })
  }

  return (
    <MainContainer>
      <FirstContainer>
        
      </FirstContainer> 
      <SecondContainer>
        <FormInput onSubmit={(e) => requestDeposit(e)}>
          <label>Your First Name</label>
          <FirstNameInput type="text"  placeholder='first name' onChange={(e) => setFirstname(e.target.value)}/>
          <label>Your Last Name</label>
          <LastNameInput type="text" placeholder='Last name' onChange={(e) => setLastName(e.target.value)}/>
          <label>Your Email Address</label>
          <EmailInput type="email" placeholder='Email address' onChange ={(e)=> setEmail(e.target.value)}/>
          <label>Your Phone Number</label>
          <PhoneNumber type="text" placeholder='Phone number' onChange={(e) => setPhonenumber(e.target.value)}/>
          <label>Payment Method</label>
          <SelectGender onChange={(e) => setDepositmethod(e.target.value)}>
            <option>-Payment Method-</option>
            <option value="PAYPAL">PAYPAL</option>
            <option value="WESTERN UNION">WESTERN UNION</option>
            <option value="MONEYGRAM">MONEYGRAM</option>
            <option value="RIA MONEY TRANSFER">RIA MONEY TRANSFER</option>
          </SelectGender>
          <ButtonContainer>
            <button type="submit">{loading ? <SpinnerCircular /> : "Make Request"}</button>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default RequestDetails


const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FirstContainer = styled.div``

const SecondContainer = styled.div`
  width: 70%;
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
  width: 100%;
  label {
    text-align: start;
    width: 98%;
    font-size: 12px;
  }

  @media (max-width: 768px) {
  width: 96%;

    label {
        margin-left: 5%;
    }
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

const SelectGender = styled.select`

  width: 98%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
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
