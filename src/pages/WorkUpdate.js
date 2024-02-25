import React from 'react'
import { Link } from 'react-router-dom'

function WorkUpdate({datas, handleTextChanges, save}) {
  return (
    <>
    <div className='frame'>
      <h1>Work Update</h1>
      <textarea placeholder='Add a note here' value={datas} onChange={handleTextChanges } id='textArea'>
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