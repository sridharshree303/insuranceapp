import React from 'react';
import './DashBoard.css';
import Table from 'react-bootstrap/Table';

const DashBoard = () => {

    function datePicker() {
        ('#picker').datetimepicker();
    }
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                                    <g fill="none" stroke="#0fdd8e" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.5 3.5h4v4" /><path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" /></g></svg>
                                <h6 id="countName">New Leads</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count2'>10
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
                                    <mask id="ipTFileDate0"><g fill="none" stroke="#0fdd8e" stroke-width="3">
                                        <path fill="" stroke-linecap="round" stroke-linejoin="round" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m30 4l10 10" /><circle cx="24" cy="28" r="8" fill="#555" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M23 25v4h4" /></g></mask><path fill="#0fdd8e" d="M0 0h48v48H0z" mask="url(#ipTFileDate0)" /></svg>
                                <h6 id="countName">Total Claims</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count3'> 08
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="none" stroke="Orange" stroke-width="2" d="M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1C5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8" /></svg>
                                <h6 id="countName">Renewal</h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count4'> 05
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                    <mask id="ipSFileDateOne0"><g fill="none" stroke-width="3"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12" />
                                        <circle cx="34" cy="36" r="8" fill="#fff" stroke="#fff" /><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 33v4h4" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 4v10h10" /></g>
                                    </mask><path fill="orange" d="M0 0h48v48H0z" mask="url(#ipSFileDateOne0)" /></svg>
                                <h6 id="countName">Expired</h6></span>
                        </div>
                    </div>
                    <div className='col-1 rotate180' id='arrowTwo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-chevron-left arrowtwo" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>

                {/* ---------------View new Applicants-------------------- */}
                <div className='row px-2'>
                    <div className='sizing3 row card card-body'>
                        <div className='float row'>
                            <h3 className='applicantHeader col-5 mt-1'>18 New Applicants</h3>
                            <button className='applicantHeader2 col-2 offset-2 right noBorder  right'>View All</button>
                            {/* -------dropdown--------- */}
                            <div className="col-3">
                                <div className='dropdown'>
                                    <select className='noBorder no-outline'>
                                        <option defaultValue="-1">All policies
                                        </option>
                                        <option value="1">Health</option>
                                        <option value="1">Document</option>
                                        <option value="1">Gallery</option>
                                    </select>
                                </div>
                            </div>
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
                                    <tr>
                                        <td>4</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------- Right layout --------------------------------- */}
            <div className='col-4'>
                <div className='sizing2 card pb-3 pt-3'>
                    <h6 className="headertwo">Top Selling Products</h6>
                    <div className='floatR'>
                        <h6 className='col-4 '>Health Protect Plus</h6>
                        <div className='col-5'>
                            <div className="progress">
                                <div className="progress-ba bg-danger" role="progressbar" style={{ "width": "75%", "ariaValuenow": "75", "ariaValuemin": "0", "ariaValuemax": "100" }}></div>
                            </div>
                        </div>
                        <h6 className='col-3 '>455 sold</h6>
                    </div>
                    <div className='floatR'>
                        <h6 className='col-4 '>Health Protect Plus</h6>
                        <div className='col-5'>
                            <div className="progress ">
                                <div className="progress-ba bg-success" role="progressbar" style={{ "width": "75%", "ariaValuenow": "75", "ariaValuemin": "0", "ariaValuemax": "100" }}></div>
                            </div>
                        </div>
                        <h6 className='col-3'>412 sold</h6>
                    </div>
                    <div className='floatR'>
                        <h6 className='col-4 '>Health Protect Plus</h6>
                        <div className='col-5'>
                            <div className="progress ">
                                <div className="progress-ba bg-warning" role="progressbar" style={{ "width": "75%", "ariaValuenow": "75", "ariaValuemin": "0", "ariaValuemax": "100" }}></div>
                            </div>
                        </div>
                        <h6 className='col-3'>340 sold</h6>
                    </div>
                </div>
                {/* -------------------meeting Calender------------------ */}
                <div className='sizing2 card pt-3 pb-3 '>
                    <div className='row'>
                        <div className='col-7'><h6 className="headertwo">Top Selling Products</h6></div>
                        <div className='col-5 date scrolling-wrapper'>
                        <input className="input-field no-outline" type="date" placeholder="Date and Time"/>
                        </div>
                    </div>
                    <div className='row dateCard'>
                        <div className='col-2 card'>02 Mon</div>
                        <div className='col-2 card'>03 Tue</div>
                        <div className='col-2 card'>04 Wed</div>
                        <div className='col-2 card'>05 Thur</div>
                        <div className='col-2 card'>06 Fri</div>
                        <div className='col-2 card'>07 Sat</div>
                        {/* <div className='col-2 card'>08 Sun</div> */}
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default DashBoard;
