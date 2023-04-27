import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';


const ViewAllApplicants = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const [applicants, setApplicants] = useState(null);
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8082/applicant/getAll").then(
        response => {
          console.log(response.data);
          setApplicants(response.data);
        }
      ).catch(
        error => console.log(error)
      );
    }
    fetchData();
  }, []);


  return (
    <div>
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
          <div className='col-11'>
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

              {/* UW Progress, Submitted, Customer to Confirm */}
              {/* -----------------first button------------ */}
              <span>
                <button type="button" className="btn btn-sm btn-outline-primary border2 mx-4 px-3">UW Progress</button>
              </span>
              <span>
                <button type="button" className="btn btn-sm btn-outline-info border2 mx-4 px-3">Submitted</button>
              </span>
              <span>
                <button type="button" className="btn btn-sm btn-outline-warning border2 mx-4 px-3">Customer to Confirm</button>
              </span>
            </div>
          </div>
          {/* <div className='col-2'>
            <button type="button" className="btn btn-primary border3 m-4 px-3">ADD NEW LEAD</button>
          </div> */}
        </div>

        <div className='row mx-3 mt-1 tableHeader'>
          <Table className='table table-hover mt-4' striped hover size="md">
            <thead>
              <tr >
                <th></th>
                <th className='colsize px-3'>Application No.</th>
                <th className='colsize'>Policy Owner</th>
                <th>Life Insured</th>
                <th>Prd Type</th>
                <th>Date</th>
                <th>SA</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                applicants !== null
                  ?
                  applicants.map((data, ind) => {
                    return (
                      <tr key={ind}>
                        <td></td>
                        <td className='px-5'>{data.applicantionId}</td>
                        <td className='px-4'>{data.policyOwner}</td>
                        <td className='px-4'>{data.lifeInsured}</td>
                        <td>{data.prdType}</td>
                        <td>{data.date}</td>
                        <td>{data.sumAssured}</td>
                        <td>{data.status}</td>
                      </tr>
                    )
                  })
                  : null
              }
            </tbody>
          </Table>
        </div>

      </div>
    </div>
  )
}

export default ViewAllApplicants
