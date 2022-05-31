import React, { useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartIcon from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Close from '../images/icon-close.svg'
import Menu from '../images/icon-menu.svg'
import Thumb1 from "../images/image-product-1-thumbnail.jpg"
import Delete from '../images/icon-delete.svg'


function Navigation({cartCount, checkout}) {
  const [sidebar, setSidebar]=useState('sidebarnone')
  const[total, setTotal]=useState(0);
  const [cartClass, setCartClass]=useState('cart-none')


  useEffect(
    ()=>{
      setTotal(cartCount*125)
   

    },[cartCount]
  )
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
        <img onClick={()=>{
          cartClass=='cart-none'?
          setCartClass('cart-show'):
          setCartClass('cart-none')
          }} src={CartIcon} alt="" className="cart"></img>
        <img src={Avatar} alt="" className="avatar"></img>
      </div>
    </div>
    <div className="navmob">
      <img src={Menu} onClick={()=>{setSidebar('sidebar')}} id="menu" alt="" className="menu"></img>
      <h2 className="logo">sneakers</h2>
      <div className="icons">
        <img src={CartIcon} alt=""
        onClick={()=>{
          cartClass=='cart-none'?
          setCartClass('cart-show'):
          setCartClass('cart-none')
          }}
           className="cart"></img>
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
    <div className={cartClass}>
      {
        cartCount===0?
        <div className='cart-card'>
           <div className='cart-head'><p>Cart</p></div>
          <div className='cart-body'>
            <p>Your cart is empty</p>
            </div>
          </div>
        :
        <div className='cart-card'>
          <div className='cart-head'><p>Cart</p></div>
          <div className='cart-body'>
              <img className='cart-thumb' src={Thumb1} alt="" />
              <div className='fall'>
                <p>Fall Limited Edition Sneakers</p>
                <p><span>$125</span>&#215;<span>{cartCount} </span><span>{total}</span></p>
            
            </div>
            <img src={Delete} onClick={()=>{ checkout()}} style={{height:"20px",cursor:"pointer"}} alt="" />
            </div>
            <div  className='checkout'><button onClick={()=>{ checkout()}}>Checkout</button></div>



        </div>
      }


    </div>
  </div>

  )
}
export default Navigation;


