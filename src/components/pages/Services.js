import React from 'react';
import '../../App.css';
import { Button } from '../Button';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.png';
import img5 from '../images/img5.jpg';



function Services() {
  return (
    <div>
      <h1 className='services'>SERVICES</h1>
      <div className="chefno">
        <div>
          <h1 className="menu-des">
            GET DELICIOUS FOODS FOR YOU
          </h1>
        </div>
        <div className="cols">
          <h3 className="menu-h">Place your order here<br></br>Choose your Chef from ORDER NOW</h3>
          <div type='Submit' className="descs">
            <input className="inpo" typeof="text" placeholder="Choose your Chef" />
            <input className="inpo" typeof="text" placeholder="Place your order" />
            <input className="inpo" typeof={Date} placeholder="Date (YYYY-MM-DD) " />
            <input className="inpo" typeof="text" placeholder="Adress for delivering" />
            <Button className='subs' typeof="text" placeholder='Submit'></Button>
          </div>
        </div>
        <div className='fooditems'>
          <img className='foodsimg' src={img1}></img>  
          <img className='foodsimg' src={img2}></img>
          <img className='foodsimg' src={img3}></img>
          <img className='foodsimg' src={img4}></img>
          <img className='foodsimg' src={img5}></img>
        </div>
      </div>
    </div>
  )
}
export default Services