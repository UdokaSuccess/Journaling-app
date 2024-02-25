import React from 'react'
import { Link } from 'react-router-dom';
import heroimg from './heroimg.jpg'
import logo from './cover.png'
// import {FaArrowRight} from 'react-icons/fa'
import { HiArrowNarrowRight } from "react-icons/hi";

function Landing() {
  return (
    <header>
    <div className='navbar'>
       <img src={logo} width={88} alt='Book_Diary_image' />
    </div>
    <div className='row'>
    <div className='col1'>
        <h1><span>D</span>ear <span>D</span>iary,</h1>
        <p>Manifest Your  dream life with guided journaling everyday</p>
         <Link to='/categories'><button className='button1'>Start { HiArrowNarrowRight }</button></Link> 
    </div>
    <div className='col2'>
     <img src={heroimg} width={480} alt='heroimg'/>
    </div>
    </div>
    </header>
  )
}

export default Landing