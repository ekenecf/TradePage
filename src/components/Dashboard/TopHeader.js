import React from 'react'
import styled from 'styled-components'
import {MdLocationCity, MdEmail} from "react-icons/md"
import {BsTelephonePlusFill} from "react-icons/bs"
import "../../index.css"


const MainContainer = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #0E2374;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      height: 5vh;
    }
`

const Wrapper = styled.div`
    width: 90%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      margin-left: 2%;
    }
`
const Container = styled.div`
    width: 30%;
    display: flex;
    color: white;
    font-weight: 500;
    font-size: 13px;
    align-items: center;
    
    @media (max-width: 768px) {
        font-size: 5px;
        width: 45%;
    }
`
const Container2 = styled.div`
    width: 20%;
    display: flex;
    color: white;
    font-weight: 500;
    font-size: 13px;
    align-items: center;
    margin-left: 20px;
    @media (max-width: 768px) {
        font-size: 5px;
        width: 30%;
        justify-content: center;
        margin-left: 0;
    }

    
`
const Container3 = styled.div`
    width: 30%;
    display: flex;
    color: white;
    font-weight: 500;
    font-size: 13px;
    align-items: center;

    @media (max-width: 768px) {
        font-size: 5px;
        width: 37%;
    }
`

const TopHeader = () => {
  return (
    <MainContainer>
        <Wrapper>
            <Container> <MdLocationCity className='Icons'/> Address: 813 Meadowbrook Drive Coppell, TX 75019</Container>
            <Container2> <BsTelephonePlusFill className='Icons'/> Dphone: VIP members only</Container2>
            <Container3> <MdEmail className='Icons'/>Email: preeminentteam@gmail.com</Container3>
        </Wrapper>
    </MainContainer>
  )
}

export default TopHeader
