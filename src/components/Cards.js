import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../images/img-9.jpg'; // Tell webpack this JS file uses this image
import img2 from '../images/img-2.jpg'; // Tell webpack this JS file uses this image
import img3 from '../images/img-3.jpg'; // Tell webpack this JS file uses this image
import img4 from '../images/img-4.jpg'; // Tell webpack this JS file uses this image
import img8 from '../images/img-8.jpg'; // Tell webpack this JS file uses this image

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
