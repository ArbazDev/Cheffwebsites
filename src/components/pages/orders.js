import React from 'react';
import '../../App.css';

import salman from '../images/Salman1.jpg';
import mushtaq from '../images/mushtaq1.jpg';
import ali from '../images/ali.jpg';


export default function SignUp() {
  return (
    <>
      <div>
        <h1 className='sign-up'>FOOD AND DRINKS</h1>
        <div className='chef-back'>
          <h1 className='chef-choose'>Choose one of our best Chefs and mention them in Services section</h1>
          <div className='um-chefss'>
            <img className="chefss" placeholder="Chef Salman Meat Master" src={salman}></img>
            <h5 className='mem-chefs'>Master Meat Chef Salman Jameel</h5>
          </div>
          <div className='um-chefsss'>
            <img className="chefss" src={mushtaq}></img>
            <h5 href='#' className='mem-chefs'>Master Vegeterian Chef Sarim</h5>
          </div>
          <div className='um-chefs'>
            <img className="chefss" src={ali}></img>
            <h5 className='mem-chefs'>Master Recipes Chef Ali</h5>
          </div>
        </div>
      </div>
    </>
  )
}
