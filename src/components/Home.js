import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza7.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={ {backgroundImage:`url(${BannerImage})`}} name='home'>
        <div className='headerContainer'>
            <h1>PizzaPort</h1>
            <p>pizza for foodies</p>
            <Link to='/menu'>
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home