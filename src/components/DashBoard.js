import React,{useRef,useEffect,useState} from 'react';
import './DashBoard.css';
import Table from 'react-bootstrap/Table';
import Modals from './Modals';
import Avatar from '@mui/material/Avatar';
import Chart from 'chart.js/auto';
import apData from '../jsonfiles/newApplicants.json';
import moment from 'moment';
import { Link } from 'react-router-dom';
const DashBoard = () => {
    const chartContainer = useRef(null);
    const chart = useRef(null);
  
    useEffect(() => {
      if (chart && chart.current) {
        chart.current.destroy(); 
      }
  
      const ctx = chartContainer.current.getContext('2d');
      chart.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [
            {
              label: 'Sales',
              data: [65, 59, 80, 81, 56, 55, 40,10,20,30,40,50],
              backgroundColor: 'blue',
            },
            {
              label: "Target",
              data: [15, 25, 35, 45, 55, 65, 75,30,20,40,60],
              backgroundColor: "purple",
           
            }
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          title: {
            display: true,
            text: "Sales vs. Target"
          },
          legend: {
              display: true,
              position: "top"
            }
          }
        });
      }, []);
    //   .......calender.........
      const [currentDate, setCurrentDate] = useState(moment());
const daysOfWeek = ['Mon   '  , 'Tues  ',  'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const startOfWeek = currentDate.clone().startOf('week');

  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.clone().add(i , 'day'));
  }


    return (
        <div className='row dashContent'>
            {/* ------------ Left Layout ------------------- */}
            <div><h6 className='col-12 pageHeader'>DashBoard</h6></div>
            <div className='col-8 overflow'>
                {/* ------- statics cards ---------- */}
                <div className='row'>
                    <div className='col-11 float'>
                        <div className='sizing card  card-body col-2 '>
                            <span id='count1'>04
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                                    <g fill="none" stroke="#0fdd8e" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9.5 3.5h4v4" /><path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" /></g></svg>
                                <h6 ><Link to ="/NewLeads" id="countName">New Leads </Link></h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count2'>10
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
                                    <mask id="ipTFileDate0"><g fill="none" stroke="#0fdd8e" strokeWidth="3">
                                        <path fill="" strokeLinecap="round" strokeLinejoin="round" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m30 4l10 10" /><circle cx="24" cy="28" r="8" fill="#555" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M23 25v4h4" /></g></mask><path fill="#0fdd8e" d="M0 0h48v48H0z" mask="url(#ipTFileDate0)" /></svg>
                             <h6 ><Link to="/TotalClaims"id="countName">Total Claims</Link></h6> 
                                {/* <Link to="/TotalClaim" className="text-size small-black mt-6 card2">TotalClaims</Link> */}
                                </span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count3'> 08
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="none" stroke="Orange" strokeWidth="2" d="M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1C5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8" /></svg>
                                <h6 > <Link to ="/Renewal" id="countName">Renewal</Link></h6></span>
                        </div>
                        <div className='sizing card card-body col-2 '>
                            <span id='count4'> 05
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                    <mask id="ipSFileDateOne0"><g fill="none" strokeWidth="3"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12" />
                                        <circle cx="34" cy="36" r="8" fill="#fff" stroke="#fff" /><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M33 33v4h4" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M30 4v10h10" /></g>
                                    </mask><path fill="orange" d="M0 0h48v48H0z" mask="url(#ipSFileDateOne0)" /></svg>
                                <h6 > <Link to="/Expired"  id="countName">Expired </Link></h6></span>
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
                            <Link to ='ViewAllApplicants' className='applicantHeader2 col-2 offset-2 right noBorder  right'>View All</Link>
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
                            <Table className='table table-hover scroll-y' striped hover size="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Policy Owner</th>
                                        <th>Prd Type</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apData.length != 0 && apData.map((data, ind) => {

                                            return(
                                            ind <= 5 ?
                                                <tr key={ind}>
                                                    <td>DCO3</td>
                                                    <td>{data['Policy Owner']}</td>
                                                    <td>{data['Prd type']}</td>
                                                    <td>{data.Date}</td>
                                                    <td>{data.Status}</td>
                                                </tr>
                                            : null
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/* -----------------bar chart------------------------- */}
                <div className='row px-2'>
                    <div className='sizing3 row card card-body'>
                        <h3>All sales</h3>
                        <canvas ref={chartContainer} />
                        
              
            
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
                        <div className='col-6'><h6 className="headertwo">Today's Schedule</h6></div>
                        <div className='col-6 date '>
                            <input className="input-field no-outline" type="date" placeholder="Date and Time" />
                        </div>
                    </div>

                    <div className='row dateCard pt-1 pb-1 '>
                        {/* <div className='col-2 card pt-1 mx-1 bg-primary'><p>02 <br />Mon</p></div>
                        <div className='col-2 card pt-1 mx-1'>03 <br /> Tue</div>
                        <div className='col-2 card pt-1 mx-1'>04 <br /> Wed</div>
                        <div className='col-2 card pt-1 mx-1'>05 <br /> Thu</div>
                        <div className='col-2 card pt-1 mx-1'>06 <br /> Fri</div>
                        <div className='col-2 card pt-1 mx-1'>07 <br /> Sat</div> */}
                      <div>Current Date: {currentDate.format('DD/MM/YYYY')}</div>
       <table>
     <thead>
          <tr>
          {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map((day) => (
              <td key={day.format('DD/MM/YYYY')} className={day.isSame(moment(), 'day') ? 'current' : ''}>
                {day.format('D')}
              </td>
            ))}
          </tr>
        </tbody>
        
      </table>
      
                    </div>
                    {/* ---------------meeting with--------------- */}
                    <div className=' dateCard1 bgazure pt-3 pb-3'>
                        <div className='float row '>
                            <div className='bipeople col-1 right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="navy" className="bi bi-people" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                </svg>
                            </div >
                            <div className='col-6 meetWith'>
                                <h4>Meeting with Ron Harris</h4> 
                                <h4 className="text-primary">4:00 PM</h4>
                            </div>
                            <div className='callVideo  col-5 float'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone bg-success" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-camera-video bg-danger" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='dateCard1  pt-3 pb-3'>
                        <div className='float row'>
                            <div className='bipeople col-1 right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="navy" className="bi bi-people" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                </svg>
                            </div>
                            <div className='col-6 meetWith'>
                                <h4>Meeting with Harry Dar</h4>
                                <h4 className="text-primary">6:00 PM</h4>
                            </div>

                            <div className='callVideo col-5 float'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone bg-success" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-camera-video bg-danger" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -----------------Todays events------------------------ */}
                <div className='sizing4 card pt-3 pb-3 '>
                    <div className="row">
                        <div className='col-9'><h6 className="headertwo">Today's Events</h6></div>
                        <div className='col-3 right px-5'><i className="fa fa-birthday-cake" aria-hidden="true"></i></div>
                    </div>
                    <div className='row avatarGroup'>
                        <div className='col-6'>
                            <div className='col-4 av1 mt-4 mb-2 float'>
                                <Avatar  className='avatar  bg-primary'  alt="Sri" src={"/"} />
                                <Avatar className='avatar bg-warning' alt="John" src={"/"} />
                                <Avatar className='avatar bg-info' alt="Monu" src={"/"} />
                            </div>
                            <p className='text-secondary'>+{18} birthdays</p>
                        </div>
                        <div className='col-6 right px-4'>
                            <Modals />
                        </div>
                    </div>
                    <div className='row avatarGroup'>
                        <div className='col-6'>
                            <div className='av2 float'>
                                <Avatar className='avatar bg-secondary' alt="N" src={"/"} />
                            </div>
                            <p className='text-secondary'> +{1} Aniversary today</p>
                        </div>
                        <div className='col-6 right px-4'>
                            <Modals />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DashBoard;
