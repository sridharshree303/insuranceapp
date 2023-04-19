import React from 'react';
import './DashBoard.css';

const DashBoard = () => {
    return (
        <div className='row dashContent'>

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
                    <div className='sizing card card-body'>
                            <h3>Display New Appplicant Data</h3>
                    </div>
                </div>
            </div>
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
