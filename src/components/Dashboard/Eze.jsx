import React from 'react'
import './eze.css'
import image from '../../asset/solid2.png'
import { ImBriefcase } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from 'react-router-dom'


export default function Eze() {

  return (
    <div className='footer'>
      <div className='footer_image'>
        <img src={image} alt="img" />
      </div>
      <div className='footer_cont'>
        <div className='footet_wrap'>
          <div className='footerNav_contain'>
            <div className='button'>
              <p>@2020 ELITE-GAIN All Rights Reserved.</p>
            </div>
            <div className='footer_nav'>
              <p>
              <NavLink to={`/about`} style={{textDecoration:"none", color:"lightgray"}}>
                ABOUT COMPANY
              </NavLink>
                </p>
              <p>
              <NavLink to={`/get_started`} style={{textDecoration:"none", color:"lightgray"}}>
                GET STARTED
              </NavLink>
              </p>
              <p>
              <NavLink to={`/affiliate`} style={{textDecoration:"none", color:"lightgray"}}>
                AFFILIATES
              </NavLink>
               </p>
              <p>
              <NavLink to={`/questions`} style={{textDecoration:"none", color:"lightgray"}}>
                FAQ
              </NavLink>
              </p>
              <p>
              <NavLink to={`/questions`} style={{textDecoration:"none", color:"lightgray"}}>
                   CONTACT US
              </NavLink>
              </p>
            </div>
          </div>
          <div className='footer_buttom'>
            <div className='footer_icons'><ImBriefcase className='icon' /> <p>ELITE-GAIN</p></div>
            <div className='footer_icons'><MdLocationOn className='icon' /> <p>Address: 613 Meadowbrook Drive Coppell,TX 75029</p></div>
            <div className='footer_icons'><ImPhone className='icon' /> <p> Phone:VIP members only</p></div>
            <div className='footer_icons'> <TfiEmail className='icon' /><p> Email: teamelitegain@gmail.com</p></div>
          </div>
        </div>

      </div>
    </div>
  )
}