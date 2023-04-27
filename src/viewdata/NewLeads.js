import React, { useEffect, useState } from 'react'
import './NewLeads.css';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import imageOne from '../jsonfiles/Sridhar.jpg';
import axios from 'axios';


const NewLeads = () => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const [leads, setLeads] = useState(null);
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8082/leads/viewall").then(
        response => {
          console.log(response.data);
          setLeads(response.data);
        }
      ).catch(
        error => console.log(error)
      );
    }
    fetchData();
  }, []);


  return (
    <div className='newLead container '>

      {/* ------------ back button + TotalApplications heading */}
      <div className='row '>
        <span className='float tableHeader1 px-4'>

          <button onClick={goBack} className=' noBorder px-3'>&nbsp;<i className="fa fa-angle-left" aria-hidden="true"></i></button>
          <h4>New leads</h4>
        </span>
      </div>

      {/* -----Two dropdowns + Three buttons */}
      {/* -----------------First dropdown------------ */}
      <div className='row'>
        <div className='col-10'>
          <div className='mt-4 float'>
            <span className='float'>

              <div className='dropdown bg-light'>
                <select className='noBorder bordergrey px-2 no-outline bg-light'>
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
              <div className='dropdown bg-light'>
                <select className='noBorder bordergrey px-2 no-outline bg-light'>
                  <option className='bg-white' defaultValue="-1">All policies</option>
                  <option value="1">Health</option>
                  <option value="1">Document</option>
                  <option value="1">Gallery</option>
                </select>
              </div>
            </span>
            
            {/* -----------------first button------------ */}
            <span>
              <button type="button" className="btn btn-sm btn-outline-primary border2 mx-4 px-3">Qualified</button>
            </span>
            <span>
              <button type="button" className="btn btn-sm btn-outline-info border2 mx-4 px-3">Interested</button>
            </span>
          </div>
        </div>
        <div className='col-2'>
          <button type="button" className="btn btn-primary border3 m-4 px-3">ADD NEW LEAD</button>
        </div>
      </div>

      <div className='row mx-3 mt-1 tableHeader'>
        <Table className='table table-hover' striped hover size="md">
          <thead>
            <tr >
              <th className='avatarp'></th>
              <th>Name</th>
              <th className='colsize'>Last Contacted</th>
              <th>Product</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Lead Stage</th>
            </tr>
          </thead>
          <tbody>
            {
              leads !== null
                ?
                leads.map((data, ind) => {
                  return (
                    <tr key={ind}>
                      <td className='px-4 py-1 pt-2 avatarp'><img className='imageStyle' src={imageOne} alt="sridhar"></img></td>
                      <td>{data.name}</td>
                      <td className='colsize'>{data.lastContacted}</td>
                      <td>{data.product}</td>
                      <td>{data.email}</td>
                      <td>(+91) {data.contact}</td>
                      <td className='text-success'>{data.leadStage}</td>
                    </tr>
                  )
                })
                : null
            }
            {/* <tr key={0}>
              <td className='px-4 py-1 pt-2 avatarp'><img className='imageStyle' src={imageOne} alt="sridhar"></img></td>
              <td>Sridhar kolluru</td>
              <td className='colsize'>2 days ago</td>
              <td>Life Insurance</td>
              <td>Sridharkolluru@gmail.com</td>
              <td>(+91) 9440521715</td>
              <td>Approved</td>
            </tr>
            <tr key={1}>
              <td className='px-4 py-1 pt-2 avatarp'><img className='imageStyle' src={imageOne} alt="sridhar"></img></td>
              <td>Sridhar kolluru</td>
              <td className='colsize'>2 days ago</td>
              <td>Life Insurance</td>
              <td>Sridharkolluru@gmail.com</td>
              <td>(+91) 9440521715</td>
              <td>Approved</td>
            </tr>
            <tr key={2}>
              <td className='px-4 py-1 pt-2 avatarp'><img className='imageStyle' src={imageOne} alt="sridhar"></img></td>
              <td>Sridhar kolluru</td>
              <td className='colsize'>2 days ago</td>
              <td>Life Insurance</td>
              <td>Sridharkolluru@gmail.com</td>
              <td>(+91) 9440521715</td>
              <td>Approved</td>
            </tr>
            <tr key={3}>
              <td className='px-4 py-1 pt-2'><img className='imageStyle' src={imageOne} alt="sridhar"></img></td>
              <td>Sridhar kolluru</td>
              <td className='colsize'>2 days ago</td>
              <td>Life Insurance</td>
              <td>Sridharkolluru@gmail.com</td>
              <td>(+91) 9440521715</td>
              <td>Approved</td>
            </tr> */}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default NewLeads
