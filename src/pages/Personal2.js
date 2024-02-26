import React from 'react'
import Note from './Notes';
import {Link} from 'react-router-dom'

function PersonalNoteContainer({notes, delet}) {
  const datas = notes.map((note) => <Note key={note.id} id={note.id} text={note.text} colors={note.color} date={note.date} dele={delet}/>)
  return (
  <div className='notesContainer'>
        <h1>Personal Thoughts</h1>
        <div className='wrapper'>
    <div className='noteList'>     
            {datas}
    </div>
    </div>
      <div className='buttons'>
                <Link to='/personal'><button className='button1'>Add </button></Link>   
                <Link to='/categories'><button className='button1'>Back</button></Link> 
      </div>
    </div>
  )
}


export default PersonalNoteContainer;