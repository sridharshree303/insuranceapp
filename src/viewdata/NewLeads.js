import React from 'react'
import './NewLeads.css';
// import { useNavigate } from 'react-router-dom';


const NewLeads = () => {

  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // }

  return (
    <div className='newLead container bg-info'>
      {/* ------------ back button + TotalApplications heading */}
      <div className='row tableHeader'>
        <span className='float'>

          <i className="fa fa-angle-left" aria-hidden="true"></i>

          <h4>Total Applications</h4>
        </span>
      </div>
      {/* -----Two dropdowns + Three buttons */}
      {/* -----------------First dropdown------------ */}
      <div className='row tableHeader'>
        <span className='float'>
          
            <div className='dropdown'>
              <select className='noBorder no-outline'>
                <option defaultValue="-1">All policies
                </option>
                <option value="1">Health</option>
                <option value="1">Document</option>
                <option value="1">Gallery</option>
              </select>
            </div>
        
        </span>
        {/* -----------------second dropdown------------ */}
        <span className='float'>
         
            <div className='dropdown'>
              <select className='noBorder no-outline'>
                <option defaultValue="-1">All policies
                </option>
                <option value="1">Health</option>
                <option value="1">Document</option>
                <option value="1">Gallery</option>
              </select>
            </div>
        
        </span>
        {/* -----------------first button------------ */}
        <span>

        </span>
        {/* -------------------------------------- */}
        <button type="button col-3" class="btn btn-primary btn-outline-info">UW Progress</button>
        <button type="button" class="btn btn-outline-info">Submitted</button>
        <button type="button" class="btn btn-outline-info">Customer to inform</button>
      </div>
      {/* UW Progress, Submitted, Customer to Confirm */}
    </div>
  )
}

export default NewLeads
