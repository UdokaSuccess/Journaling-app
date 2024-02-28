import React from 'react'
import { Link } from 'react-router-dom'

function Grateful({title, data, add, handleTitleChanges, handleAddChanges, handleTextChanges, save}) {
  return (
  <div className='frame'>
      <h1>Gratitude Notes</h1>

      <textarea placeholder='Title' value={title} onChange={handleTitleChanges } className='textArea' rows={2}>
      </textarea>
      <textarea placeholder='What are you grateful for?' value={data} onChange={handleTextChanges} className='textArea'>
      </textarea>
      <textarea placeholder='Additional notes' value={add} onChange={handleAddChanges} className='textArea'>
      </textarea>

      <div className='buttons'> 
      <Link to='/gratitude' onClick={save}><button className='button1'>Save</button></Link> 
      <Link to='/gratitude'><button className='button1'>Back</button></Link> 
      </div>
      </div>
  )
}

export default Grateful