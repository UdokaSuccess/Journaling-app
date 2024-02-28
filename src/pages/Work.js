import React from 'react'
import {Link} from 'react-router-dom';
import Note from './Notes';



function Work({notes, delet, click}) {
  const datas = notes.map((note) => <Note key={note.id} id={note.id} text={note.text} colors={note.color} date={note.date} dele={delet} title={note.title} add={note.add} click={click} editing={note.editing}/>)
  

  return (
    <div className='notes-Container'>
           <h1>Work Updates</h1>
           <div className='wrapper'>
    <div className='noteList'>  
    {datas}
    </div>
    </div>
    <div className='buttons'>
         <Link to='/workUpdate'><button className='button1'>Add</button></Link> 
         <Link to='/categories'><button className='button1'>Back</button></Link> 
         </div>
    </div>
  )
}

export default Work