import React from 'react';
import {Link} from 'react-router-dom';
import { MdSchool } from "react-icons/md";
import { GiPrayer } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
const category = [
    {
        id : '1',
        name: 'Gratitude Notes',
        icon: <GiPrayer/>,
        comp: '/gratitude' 
    },
    {
        id : '3',
        name: 'School Tasks',
        icon: <MdSchool/>,
        comp: '/school'

        
    }, {
        id : '2',
        name: 'Work Updates',
        icon: <BsPersonWorkspace/>,
        comp: '/work'

        
    },
    {
        id : '4',
        name: 'Personal Diary',
        icon: <GiPrayer/>,
        comp: '/personalnote'
        
    }
]



// To return categories 

const items =  category.map((item) => {
return (
    <div className='column' key={item.id}>
    <Link to={item.comp} key={item.id} ><button className='selection'>{item.name}<br></br>{item.icon}</button></Link>
    </div>
)

})


// To render the whole categories
function Categories() {
    return(
    <>
    <h1 style={{fontSize: '1.6rem', textTransform: 'uppercase', display: 'flex', justifyContent: 'center'}}>Categories</h1>
    <div className='row1'>
         {items}
         <Link to='/landing'><button className='button1'>Home</button></Link>
        </div>
    </>
    )

    }

export default Categories;


