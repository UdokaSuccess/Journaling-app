import React from 'react'
import { Link } from 'react-router-dom'

function Schooltasks({datas, handleTextChanges, save}) {
  return (
    <div className='frame'>
    <h1>School Tasks</h1>
    <textarea placeholder='What did you learn today?' value={datas} onChange={handleTextChanges } className='textarea'>
    </textarea>
    <div className='buttons'> 
    <Link to='/school' onClick={save}><button className='button1'>Save</button></Link> 
    <Link to='/school'><button className='button1'>Back</button></Link> 
    </div>
    </div>
  )
}

export default Schooltasks