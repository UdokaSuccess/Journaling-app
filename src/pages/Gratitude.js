import React from 'react'
import {Link} from 'react-router-dom'
import Note from './Notes'
import { CiEdit } from "react-icons/ci";




  function Gratitude({notes, delet}) {
    const datas = notes.map((note) => <Note key={note.id} id={note.id} text={note.text} colors={note.color} date={note.date} dele={delet}/>)
  
    return (
      <div>
             <h1>Gratitude Entries</h1>
             <div className='wrapper'>
      <div className='noteList'>  
      {datas}
      </div>
      </div>
      <div className='buttons'>
           <Link to='/grateful'><button className='button1' >Add </button></Link> 
           <Link to='/categories'><button className='button1'>Back</button></Link> 
           </div>        
      </div>
    )
  }
  
export default Gratitude;