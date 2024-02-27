import React from 'react'
import { Link } from 'react-router-dom';
import bookImg from './bookIcon4.png'
import logo from './cover.png'



const roots = document.querySelector(':root')
const handleFontA = () =>  roots.style.setProperty('--font', 'cursive')
const handleFontB = () =>  roots.style.setProperty('--font', 'Monospace')
const handleFontC = () =>  roots.style.setProperty('--font', "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif")
const handleFontD = () =>  roots.style.setProperty('--font',  '"Berkshire Swash", serif')
const handleFontE = () =>  roots.style.setProperty('--font',  "Georgia, 'Times New Roman', Times, serif")



function Landing() {
  return (
    <header>
      <div className='navbar'>
       <Link to='/landing'><img src={logo} width={104} alt='Book_Diary_image' className='logo'/></Link>
     <div className="dropdown">
    <button className="dropbtn">Fonts</button>
    <div className="dropdown-content">
    <a href="#cursiveFont" onClick={handleFontA}>Cursive</a>
    <a href="#monospaceFont" onClick={handleFontB}>Monospace</a>
    <a href="#lucidaFont" onClick={handleFontC}>Lucida</a>
    <a href="#serif" onClick={handleFontD}>Berkshire</a>
    <a href="#georgiaFont" onClick={handleFontE}>Default</a>

  </div>
 </div>
    </div><hr></hr>
    
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