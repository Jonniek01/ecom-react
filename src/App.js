
import './App.css';
import CartIcon from './images/icon-cart.svg'

import Navigation from './components/Navigation';
import Product1 from './images/image-product-1.jpg'
import Product2 from './images/image-product-2.jpg'
import Product3 from './images/image-product-3.jpg'
import Product4 from './images/image-product-3.jpg'

import Thumb1 from "./images/image-product-1-thumbnail.jpg"
import Thumb2 from "./images/image-product-2-thumbnail.jpg"
import Thumb3 from "./images/image-product-3-thumbnail.jpg"
import Thumb4 from "./images/image-product-4-thumbnail.jpg"

import Next from './images/icon-next.svg'
import Previous from './images/icon-previous.svg'



function App() {
  return (
    <div className="App">
      <Navigation/>
    <div className="contentcontainer">
    <div className="content">
      <div className="left">
        <img src={Product1} alt="" className="product"></img>
        <div className="arrows"><img src={Previous} alt="" className="prev"></img><img src={Next} alt="" className="next"></img></div>
        <ul className="thumbnails">
          <li>
            <img src={Thumb1} alt=""></img>
          </li>

          <li>
            <img src={Thumb2} alt=""></img>
          </li>
          <li>
            <img src={Thumb3} alt=""></img>
          </li>
          <li>
            <img src={Thumb4} alt=""></img>
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
        <p className='pone'><span className="pl">-</span><span>0</span><span className="mn">+</span></p>
        <p className="ptwo"><img src={CartIcon} style={{ color:"white",height:"15px"}} height="15px" alt=""></img><span>Add to cart</span></p>
      </div>

      </div>

    </div>

  </div>

   
      
    </div>
  );
}

export default App;
