import React from 'react';
import meets from '../jsonfiles/meetings.json';
import { useState, useEffect } from 'react';

const MeetingCheck = () => {

    const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayObj = {
        date: '',
        day: '',
    };

    //button handler
    const [isActive, setIsActive] = useState(true);
    const [activeButton, setActiveButton] = useState(0);

    const nextDate = [];
    const nextDateHandler = () => {

        let d = date;
        dayObj.date = new Date(d).getDate();
        dayObj.day = daysOfWeek[new Date(d).getDay()];
        nextDate.push(dayObj);

        for (let i = 1; i <= 6; i++) {

            //date
            const next = new Date(new Date(d).getTime() + i * 24 * 60 * 60 * 1000);
            const formattedDate = next.getDate();

            //day
            const dayOfWk = daysOfWeek[next.getDay()];

            nextDate.push({ date: formattedDate, day: dayOfWk });
        }
    }

    const [meetsWith, setMeetsWith] = useState(meets[0].meets);

    nextDateHandler();

    const dateHandler = (e) => {
        e.preventDefault();
        setDate(e.target.value);
        setActiveButton(0);
    }

    const handleClick = (index) => {
        setActiveButton(index);
        setIsActive(true);
        console.log(isActive);
        console.log(index);
        setMeetsWith(meets[index].meets);
    }

    const buttonStyle = {
        backgroundColor: isActive ? 'blue' : 'white',
        color: isActive ? 'white' : 'blue',
    };

    useEffect(() => { }, [activeButton])


    return (
        <div className=''>
            <div className='sizing2 card pt-3 pb-3 col-4'>
                <div className='row'>
                    <div className='col-6'><h6 className="headertwo">Today's Schedule</h6></div>
                    <div className='col-6 date '>
                        <input className="input-field no-outline"
                            onChange={dateHandler}
                            name="date"
                            value={date}
                            type="date"
                            placeholder="Date and Time" />
                    </div>
                </div>

                <div className='row dateCard pt-1 pb-1 '>
                    {

                        nextDate.map((data, key) => {
                            return (
                                key < 6 ?
                                    key === activeButton
                                        ?
                                        <button key={key} style={buttonStyle} onClick={() => handleClick(key)} className='col-2 calender btn btn-outline-primary shadow-sm mb-2 rounded '><p>{data.date}<br />{data.day}</p></button>
                                        :
                                        <button key={key} onClick={() => handleClick(key)} className='col-2 calender btn btn-outline-primary shadow-sm mb-2 rounded '><p>{data.date}<br />{data.day}</p></button>

                                    : null
                            )
                        })

                    }
                </div>
                {/* ---------------meeting with--------------- */}
                <div className=' dateCard1 bgazure pt-3 pb-3'>
                    {
                        meetsWith.map((meet, key) => {
                            return (
                                <div className='float row ' key={key}>
                                    <div className='bipeople col-1 right'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="navy" className="bi bi-people" viewBox="0 0 16 16">
                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                        </svg>
                                    </div >
                                    <div className='col-6 meetWith'>
                                        <h4>Meeting with {meet.meetWith}</h4>
                                        <h4 className="text-primary">{meet.time} PM</h4>
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
                            )
                        })
                    }
                </div>
                {/* <div className='dateCard1  pt-3 pb-3'>
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
                </div> */}
            </div>
        </div>
    )
}

export default MeetingCheck;
