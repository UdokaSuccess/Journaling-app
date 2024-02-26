import React from 'react'
import { Link } from 'react-router-dom';
import bookImg from './bookIcon4.png'
import logo from './cover.png'

function Landing() {
  return (
    <header>
    <img src={logo} width={104} alt='Book_Diary_image'/>
    
    <div className='row'>
    <div className='col1'>
        <h1><span>D</span>ear <span>D</span>iary,</h1>
        <p>Manifest Your  dream life with guided journaling everyday</p>
         <Link to='/categories'><button className='button1'>Start</button></Link> 
    </div>
    <div className='col2'>
     <img src={bookImg} width={680} alt='heroimg'/>
    </div>
    </div>
    </header>
  )
}

export default Landing