import React from 'react'
import { Link } from 'react-router-dom'

function WorkUpdate({title, datas, add, handleTextChanges, handleTitleChanges, handleAddChanges, save}) {
  return (
    <>
    <div className='frame'>
      <h1>Work Update</h1>
      <textarea placeholder='Title' value={title} onChange={handleTitleChanges } className='textArea' rows={1}>
      </textarea>
      <textarea placeholder='Meeting Summary' value={datas} onChange={handleTextChanges } className='textArea'>
      </textarea>
      <textarea placeholder='Next Steps' value={add} onChange={handleAddChanges} className='textArea'>
      </textarea>
      <div className='buttons'> 
      <Link to='/work' onClick={save}><button className='button1'>Save</button></Link> 
      <Link to='/categories'><button className='button1'>Back</button></Link> 
      </div>
      </div>
    </>
  )
}

export default WorkUpdate