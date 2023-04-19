import React from 'react';
import './DashBoard.css';
import Table from 'react-bootstrap/Table';

const DashBoard = () => {
    return (
        <div className='row dashContent'>
            {/* ------------ Left Layout ------------------- */}
            <h6 className='col-12 pageHeader'>DashBoard</h6>
            <div className='col-8'>
                {/* ------- statics cards ---------- */}
                <div className='row '>
                    <div className='col-11 float'>
                        <div className='sizing card card-body col-2 '>
                            <span id='count1'>04
                                <h6 id="countName">New Leads</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count2'>10
                                <h6 id="countName">Total Claims</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count3'> 08
                                <h6 id="countName">Renewal</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count4'> 05
                                <h6 id="countName">Expired</h6></span>
                        </div>
                    </div>
                    <div className='col-1 rotate180' id='arrowTwo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-chevron-left arrowtwo" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>

                {/* ---------------View new Applicants-------------------- */}
                <div className='row px-2'>
                    <div className='sizing3 row card card-body'>
                        <div className='float row'>
                            <h3 className='applicantHeader col-5 mt-1'>18 New Applicants</h3>
                            <button className='applicantHeader2 col-2 offset-3 right noBorder  right'>View All</button>
                            {/* -------dropdown--------- */}
                            <div className="col-2">
                                <div className="form-group dropdown-container">
                                    <select name="" id="" className="drop form-control ">
                                        <option className='dropdownItem' defaultValue="-1">All policies </option>
                                        <option className='dropdownItem' value="1">Health</option>
                                        <option className='dropdownItem' value="1">Document</option>
                                        <option className='dropdownItem' value="1">Gallery</option>
                                    </select>
                                    <i className="fa fa-angle-down "></i>
                                </div>
                            </div>

                            {/* <p>New Applicants Data ---- View All action ------ Dropdown for policies </p> */}
                        </div>
                        <div>
                            <Table className='table table-hover' striped hover size="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>Lockwood</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------- Right layout --------------------------------- */}
            <div className='col-4'>
                <div className='sizing2 card sellBottom'>
                    <h6 className="sellHeader">Top Selling Products</h6>
                    <p className='sellPrd'>Top Selling Products</p>
                    <p className='sellPrd'>Top Selling Products</p>
                    <p className='sellPrd'>Top Selling Products</p>
                </div>
            </div>
        </div >

    )
}

export default DashBoard;
