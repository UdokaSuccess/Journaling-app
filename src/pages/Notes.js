import React from 'react'
import { MdDeleteForever } from "react-icons/md";


function Note({id, text, colors, date, dele}) {
  return (
    <div className='note' style={{backgroundColor: colors}}>
        <span>{text}</span>
        <div className='note-footer'>
         <small>{date}</small>
         <div id='buttons-del-edit'>
         <MdDeleteForever  onClick={() => dele(id)} size='1.2rem' id='deleteicon'/>
         </div>
        </div>
    </div>
  )
}

export default Note;