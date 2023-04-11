import React, {useEffect, useState} from 'react'
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import AccountDetail from './AccountDetail'
import Eze from './Eze'
import Axios from "axios"
import { useParams } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';

const Dashboard = ({Display}) => {
  const { userid } = useParams();
  const [data, setData] = useState()
  const url = `https://preeminentcryptotrade.onrender.com/api/userdata/${userid}`
 /*  console.log(data) */

useEffect(()=>{

    Axios.get(url)
    .then(res => setData(res.data.data))
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
},[])

  useEffect(()=>{
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  return (
    <div>
       {!data ? 
       <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <AccountDetail />
        <Eze />
       </div>: <div style={{width:"100%", height:"100vh", position:"fixed", display:"flex", background: "black", color: "white", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
       <SpinnerDotted size={50} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" />
            <span style={{marginTop: "30px", textAlign: "center"}}>
            Please Wait While We connect to Your Account.
          </span>
        </div>}
    </div>
  )
}

export default Dashboard