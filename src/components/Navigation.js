import React from 'react'
import '../css/Navigation.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartIcon from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Close from '../images/icon-close.svg'
import Menu from '../images/icon-menu.svg'
function Navigation() {
  const [sidebar, setSidebar]=useState('sidebarnone')
  return (
    <div className="nav">
    <div className="navdesk">
      <div className="logo">sneakers</div>
      <ul>
        <li>
          <Link to="#">Collection</Link>
        </li>
        <li>
          <Link to="#">Men</ Link>
        </li>
        <li className='w'>
          <Link to="#">Women</ Link>
        </li>

        <li>
          <Link to="#">About</ Link>
        </li>
        <li>
          <Link to="#">Contact</ Link>
        </li>

      </ul>
      <div className="icons">
        <img src={CartIcon} alt="" className="cart"></img>
        <img src={Avatar} alt="" className="avatar"></img>
      </div>
    </div>
    <div className="navmob">
      <img src={Menu} onClick={()=>{setSidebar('sidebar')}} id="menu" alt="" className="menu"></img>
      <h2 className="logo">sneakers</h2>
      <div className="icons">
        <img src={CartIcon} alt="" className="cart"></img>
        <img src={Avatar} alt="" className="avatar"></img>
      </div>
      <div className={sidebar} id="sidebar">
        <img src={Close} onClick={()=>{setSidebar('sidebarnone')}} alt="" id="close" className="close"></img>
        <ul>
          <li>
            <Link to="#">Collection</Link>
          </li>
          <li>
            <Link to="#">Men</ Link>
          </li>
          <li className='w'>
            <Link to="#">Women</ Link>
          </li>

          <li>
            <Link to="#">About</ Link>
          </li>
          <li>
            <Link to="#">Contact</ Link>
          </li>
  
        </ul>
  

      </div>
    </div>
  </div>

  )
}

export default Navigation