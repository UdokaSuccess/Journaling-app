import {Link} from 'react-router-dom';


 function Personal({datas, handleTextChanges, save}) { 
  return (
    <>
    <div className='frame'>
      <h1>Personal Thoughts</h1>
      {/* <input type='text' placeholder='Title' onChange={handleChangeTitle}/> */}
      <textarea placeholder='Add a note here' value={datas} onChange={handleTextChanges } id='textArea'>
      </textarea>
      <div className='buttons'> 
      <Link to='/personalnote' onClick={save}><button className='button1'>Save</button></Link> 
      <Link to='/categories'><button className='button1'>Back</button></Link> 
      </div>
      </div>
    </>
  )
 }

export default Personal