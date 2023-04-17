import React from 'react';
import './Dashboard.css';

const DashBoard = () => {
  return (
    <div className='dash' >
         <div className='container'>
            <div className='imagebox'>BRAND</div>

            <ol className='navbar'>
                <li className='serachbox'><i className='fas fa-search'><input type="text" placeholder="Search.."/> </i></li>

            </ol>
         </div>
    </div>
  )
}

export default DashBoard;
