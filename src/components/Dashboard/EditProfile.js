import React, { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import EditForm from "./EditForm"
import Eze from './Eze'


function EditProfile({ Display }) {

  useEffect(()=>{
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])

    const location = useLocation();
    const { edit } = location.state || {};
    console.log(edit)

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <EditForm />
        <Eze />
    </div>
  )
}

export default EditProfile
