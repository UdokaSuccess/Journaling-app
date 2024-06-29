import React from 'react'
import { Link } from 'react-router-dom';
import { FaBookOpenReader } from "react-icons/fa6";


const roots = document.querySelector(':root')
const handleFontA = () =>  roots.style.setProperty('--font', 'Amita, cursive')
const handleFontB = () =>  roots.style.setProperty('--font', '"Kode Mono", monospace')
const handleFontC = () =>  roots.style.setProperty('--font', "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif")
const handleFontD = () =>  roots.style.setProperty('--font',  '"Berkshire Swash", serif')
const handleFontE = () =>  roots.style.setProperty('--font',  "Aclonica, sans-serif")
const handleFontF = () =>  roots.style.setProperty('--font',  "Georgia, 'Times New Roman', Times, serif")





function Landing() {
  return (
    <header>
      <div className='navbar'>
     <div className="dropdown">
    <button className="dropbtn">Fonts</button>
    <div className="dropdown-content">
    <a href="#cursiveFont" onClick={handleFontA}>Cursive</a>
    <a href="#monospaceFont" onClick={handleFontB}>Monospace</a>
    <a href="#lucidaFont" onClick={handleFontC}>Lucida</a>
    <a href="#serif" onClick={handleFontD}>Berkshire</a>
    <a href="#Aclonica" onClick={handleFontE}>Aclonica</a>
    <a href="#georgiaFont" onClick={handleFontF}>Default</a>
  </div>
 </div>
    </div><hr></hr>
    
    <div className='row'>
    <div className='col1'>
        <FaBookOpenReader size={160} id='icon'/>
        <h1><span>D</span>ear <span>D</span>iary,</h1>
        <p>Manifest Your  dream life with guided journaling everyday</p>
         <Link to='/categories'><button className='button1'>Start</button></Link> 
    </div>
    </div>
    </header>
  )
}

export default Landing