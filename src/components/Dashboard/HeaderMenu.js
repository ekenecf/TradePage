import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import '../../index.css'
import styled from 'styled-components'
import bg from '../../asset/bg-wrp.png'
import { useParams } from "react-router-dom";
import Axios from "axios"
import { useEffect, useState } from 'react'

const MainContainer = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${bg}), #03318f;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
    height: 20vh;
  }
  @media (max-width: 375px) {
    background-size: cover;
    background-repeat: no-repeat;
    height: 5vh;
  }
  @media (max-width: 1024px) {
    background-size: cover;
    background-repeat: no-repeat;
    height: 24vh;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 5%;
    padding-top: 10px;
  }
`
const MyMenu = styled.div`
  margin: 0px 1%;
  font-size: 16px;
  font-weight: 700;
  color: white;
  font-family: sans-serif;
  cursor: pointer;
  transition: all 350ms;
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: all 350ms;
    :hover {
      color: orange;
    }
  }

  :hover {
    color: orange;
  }

  @media (max-width: 425px) {
    font-size: 5px;
  }
  @media (max-width: 320px) {
    font-size: 4px;
  }
`
const MyMenuButton = styled.div`
  margin: 0px 1%;
  font-size: 15px;
  font-weight: 700;
  color: darkblue;
  font-family: sans-serif;
  cursor: pointer;
  transition: all 350ms; 
  background: ${({ bg }) => (bg ? '#fff' : 'orange')};
  padding: 7px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }

  :hover {
    color: ${({ bg }) => (bg ? 'darkblue' : 'darkblue')};
    background: ${({ bg }) => (bg ? 'orange' : '#fff')};
  }

  @media (max-width: 768px) {
    font-size: 7px;
    width: 32px;
  }
`
const DashBoardText = styled.h2`
  margin-left: 5%;
  font-size: 55px;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
  }
`

const HeaderMenu = () => {
  const location = useLocation()
  const { edit } = location.state || {}
  const { about } = location.state || {}
  const { deposit } = location.state || {}
  const { withdraw } = location.state || {}
  const { faq } = location.state || {}
  const { contact } = location.state || {}
  const { privacy } = location.state || {}
  const { update } = location.state || {}

  const { userid } = useParams();
  const [data, setData] = useState()
  /*   const UserData =JSON.parse(localStorage.getItem("User")) */
  /*   console.log("this is the userid",userid) */
    
  
  
    const url = `https://preeminentcryptotrade.onrender.com/api/userdata/${userid}`
  
    useEffect(()=>{
      Axios.get(url)
      .then(res => setData(res.data.data))
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  
  const mydata = {...data}
  /* console.log("this is the datas i what to use",mydata) */
/*   const id = JSON.parse(localStorage.getItem("User") )
  console.log("this is",id.data._id)
 */
  return (
    <MainContainer>
      <Wrapper>
        <MyMenu>
          <NavLink to={`/dashboard/${userid}`}>OVERVIEW</NavLink>
        </MyMenu>
        <MyMenu>
          <NavLink to={`/about-company/${userid}`}state={{ about: 'about' }}>
            ABOUT
          </NavLink>
        </MyMenu>
        <MyMenu>
        <NavLink to={`/faq/${userid}`} state={{ faq: 'faq' }}>
        FAQ
          </NavLink>
          </MyMenu>
        <MyMenu>
        <NavLink to={`/privacypolicy/${userid}`} state={{ privacy: 'privacy' }}>
        PRIVACY POLICY
          </NavLink>
          </MyMenu>
        <MyMenu>
          <NavLink to={`/edit/${userid}`} state={{ edit: 'edit' }}>
            EDIT
          </NavLink>
        </MyMenu>
        <MyMenu>
        <NavLink to={`/contactus/${userid}`} state={{ contact: 'contact' }}>
        CONTACT US
          </NavLink>
          </MyMenu>
        <MyMenu>
          <NavLink to={`/`} onClick={() => localStorage.removeItem("User")}>
            LOGOUT
          </NavLink>
          </MyMenu>
            {!mydata.isAdmin ?
             <MyMenu>
             <NavLink to={`/update/${userid}`} state={{ update: 'update' }}>
               UPDATE
             </NavLink>
             </MyMenu>
            : null}
        <MyMenuButton>
          <NavLink to={`/deposit/${userid}`} state={{ deposit: 'deposit' }}>
            DEPOSIT
          </NavLink>
        </MyMenuButton>
        <MyMenuButton bg>
          <NavLink to={`/withdraw/${userid}`} state={{ withdraw: 'withdraw' }}>
            WITHDRAW
          </NavLink>
        </MyMenuButton>
      </Wrapper>
      <DashBoardText>
        {edit ? 'Edit' : about ? 'About Us' : deposit ? 'Deposit' : withdraw ? 'Withdraw' : faq ? "FAQ" : contact ? "CONTACT US" : privacy ? "PRIVACY" : update ? "update" : 'Dashboard'}
      </DashBoardText>
    </MainContainer>
  )
}

export default HeaderMenu
