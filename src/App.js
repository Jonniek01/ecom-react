
import './App.css';
import CartIcon from './images/icon-cart.svg'

import Navigation from './components/Navigation';
import Product1 from './images/image-product-1.jpg'
import Product2 from './images/image-product-2.jpg'
import Product3 from './images/image-product-3.jpg'
import Product4 from './images/image-product-4.jpg'

import Thumb1 from "./images/image-product-1-thumbnail.jpg"
import Thumb2 from "./images/image-product-2-thumbnail.jpg"
import Thumb3 from "./images/image-product-3-thumbnail.jpg"
import Thumb4 from "./images/image-product-4-thumbnail.jpg"

import Next from './images/icon-next.svg'
import Previous from './images/icon-previous.svg'
import { useState } from 'react';



function App() {
  const [count, setCount]=useState(0)
  const [cartCount, setCartCount]=useState(0)

  const [Product, setProduct]=useState(Product1)
  const [overlay, setOverlay]=useState('overlay-none')
  const [image, setImage]=useState(Product)
  const [imagecount, setImagecount]=useState(0)

  let images=[Product1,Product2,Product3,Product4]
  function nextImage(){
    if(imagecount<3){
      setImagecount(imagecount+1);
      setImage(images[imagecount])
    }
    else
      {
        setImagecount(0);
        setImage(images[imagecount])
      }
    
  }
  function prevImage(){
    if(imagecount>0){
      setImagecount(imagecount-1);
      setImage(images[imagecount])
    }
    else
      {
        setImagecount(3);
        setImage(images[imagecount])
      }
    
  }



 function plus(){
    setCount(count+1)
  }
  function minus(){
    if(count>0){
      setCount(count-1)


    }
  }
  function add(){
    setCartCount(cartCount+count)
    setCount(0)


  }
  function checkout(){
    setCartCount(0)

  }
  return (
    <div className="App">
      <Navigation cartCount={cartCount} checkout={checkout}/>
    <div className="contentcontainer">
    <div className="content">
      <div className="left">
        <img src={image} onClick={()=>{setOverlay('overlay-show')}} alt="" className="product"></img>
        <div className="arrows"><img src={Previous} alt="" onClick={prevImage} style={{cursor:"pointer"}} className="prev"></img><img src={Next} alt="" onClick={nextImage} style={{cursor:"pointer"}}  className="next"></img></div>
        <ul className="thumbnails">
          <li>
            <img onClick={()=>{setProduct(Product1);setImage(Product)}} src={Thumb1} alt=""></img>
          </li>

          <li>
            <img onClick={()=>{setProduct(Product2);setImage(Product)}} src={Thumb2} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product3);setImage(Product)}} src={Thumb3} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product4);setImage(Product)}} src={Thumb4} alt=""></img>
          </li>

        </ul>

      </div>
      <div className="right">
        <p className="intro">Sneaker company</p>
        <h1 className="title">Fall Limmitted Edition Sneaker</h1>
        <p className="text">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="price">
          <p className="p-price"><span className="price1">$125.00</span><span className="disc">50%</span></p>
          <p className="striked" >$250.00</p>
        </div>
        <div className="cartdiv">
        <p className='pone'><span className="pl" onClick={minus} >-</span><span>{count}</span><span className="mn" onClick={plus}>+</span></p>
        <p className="ptwo" onClick={add} ><img src={CartIcon} style={{ color:"white",height:"15px"}} height="15px" alt=""></img><span>Add to cart</span></p>
      </div>

      </div>

    </div>

  </div>
  <div className={overlay}>
    <div className='over-content'>
      <div className='close-over'><p style={{cursor:"pointer"}} onClick={()=>{setOverlay('overlay-none')}}>X</p></div>

  <img className='overlay-image' src={image} alt=""></img>
  <div className="change"><img src={Previous} alt="" onClick={prevImage} style={{cursor:"pointer"}} className="prev"></img><img src={Next} alt="" onClick={nextImage} style={{cursor:"pointer"}}  className="next"></img></div>
  <ul className="thumbnails" id='over-thumbs'>
          <li>
            <img onClick={()=>{setProduct(Product1);setImage(Product)}} src={Thumb1} alt=""></img>
          </li>

          <li>
            <img onClick={()=>{setProduct(Product2);setImage(Product)}} src={Thumb2} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product3);setImage(Product)}} src={Thumb3} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product4);setImage(Product)}} src={Thumb4} alt=""></img>
          </li>

        </ul>

  </div>



  </div>

   
      
    </div>
  );
}

export default App;
