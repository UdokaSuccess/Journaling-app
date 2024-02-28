import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Note({id, text, colors, date, dele, title, add, click, editing}) {
  return (
    <div className='note' style={{backgroundColor: colors}}>
      <div className='note-footer'>
      <span style={{fontSize: '1.1rem', fontWeight:'bold'}}>{title}</span>
       <Link to={editing} onClick={() => click(id)}><FaEdit size='1.2rem'/></Link>
      </div>
        <span>{text}</span>
        <span>{add}</span>
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