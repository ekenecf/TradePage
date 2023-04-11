import React from 'react'
import styled from 'styled-components'


function RequestDetails() {
  return (
    <MainContainer>
      <FirstContainer>
        
      </FirstContainer> 
      <SecondContainer>
        <FormInput>
          <label>Your First Name</label>
          <FirstNameInput type="text"  placeholder='first name'/>
          <label>Your Last Name</label>
          <LastNameInput type="text" placeholder='Last name' />
          <label>Your Email Address</label>
          <EmailInput type="email" placeholder='Email address' />
          <label>Your Phone Number</label>
          <PhoneNumber type="text" placeholder='Phone number' />
          <label>Payment Method</label>
          <SelectGender>
            <option>-Payment Method-</option>
            <option value="PAYPAL">PAYPAL</option>
            <option value="WESTERN UNION">WESTERN UNION</option>
            <option value="MONEYGRAM">MONEYGRAM</option>
            <option value="RIA MONEY TRANSFER">RIA MONEY TRANSFER</option>
          </SelectGender>
          <ButtonContainer>
            <button type="submit">MAKE REQUEST</button>
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
