import React, { useState } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Logo from '../jsonfiles/Sent.png';

import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';


const Modals = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    setShow(false);
    setDisable(false);
    setTextAreaCount(0);
  }
  const handleShow = () => setShow(true);
  const handleShow2 = () => {
    console.log("entered");
    setShow(false);
    console.log("setshow false");
    setShow2(true);
    console.log("setshow2 true")
  }

  const handleClose2 = () => {
    setShow2(false);
    setDisable(false);
    setTextAreaCount(0);
    console.log("handleClose2");
  }

  const [emails, setEmails] = useState(["SridharKolluru@gmail.com", "TejasriGamidi@gamil.com", "LavanyaBejawada@gmail.com", "LavanyaBejawada@gmail.com"]);
  const [message, setMessage] = useState(["Wish You a Very Happy Birthday"]);
  const [focused, setFocused] = React.useState(false);
  const [textAreaCount, setTextAreaCount] = React.useState(0);
  const [disable, setDisable] = React.useState(false);


  const recalculate = (e) => {
    // console.log("event value:", e);
    if (e.target.value.length > 250) {
      console.log("disabled");
      setDisable(true);
    } else {
      // console.log("enabled");
      setDisable(false);
    }
    console.log(textAreaCount);
    setTextAreaCount(e.target.value.length);
  };

  return (
    <>
      <Button className='modalButton' variant="light" onClick={handleShow}>
        Send Wishes
      </Button>

      {show ?
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='px-3 py-1'>Send Wishes To</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="px-3" controlId="exampleForm.ControlInput1">
                <ReactMultiEmail
                  placeholder='Input your email'
                  emails={emails}
                  onChange={(emails) => {
                    setEmails(emails);
                  }}
                  autoFocus={true}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  getLabel={(email, index, removeEmail) => {
                    return (
                      index < 2 ?
                        <div data-tag key={index}>
                          <div data-tag-item>{email}</div>
                          <span data-tag-handle onClick={() => removeEmail(index)}>
                            ×
                          </span>
                        </div>
                        : (
                          index == 3
                            ?
                            <div data-tag key={index}>
                              <div data-tag-item>{"+" + (emails.length - 2) + " more"}</div>
                            </div>
                            : null
                        )
                    );
                  }}
                />
                <br />
                {/* <h4>react-multi-email value</h4>
                <h3>Focused: {focused ? 'true' : 'false'}</h3>
                <p>{emails.join(', ') || 'empty'}</p> */}
              </Form.Group>
              <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='birthdayMessage'
                  type="text"
                  placeholder="Enter message"
                  defaultValue={message}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className=' pt-2'>
                  <Form.Label className='px-1'>Label</Form.Label>
                  <span className='right'>{textAreaCount}/250</span>
                </div>
                <Form.Control as="textarea" disabled={disable} onChange={recalculate} rows={5} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='modalOneBtn' variant="info  fw-bold" onClick={handleClose}>
              Discard
            </Button>
            <Button className='modalOneBtn' variant="primary fw-bold" onClick={handleShow2}>
              Send
            </Button>
          </Modal.Footer>
        </Modal> : ""
      }

      {show2 ?
        <Modal centered size='xl bottom' show={show2} onHide={handleClose2}>
          <Modal.Body className='modalTwoBg pt-4 pb-4'>
            <div className='row right px-3'>
              <button type="button" onClick={handleClose2} className="btn-close col-12" aria-label="Close"></button>
            </div>
            <div className='row mt-4 pt-1'>
              <div className='col-5'>
                <img src={Logo} class="rounded float-left Logo" alt="..."/>
              </div>
              <div className='col-7'>
                <Modal.Title className='modalTwoText' >Your Birthday Wishes Has been sent.</Modal.Title>
                <Button className='modalOneTwo fw-bold mt-4 mb-3' variant="info" onClick={handleClose2}>
                  Okay Thanks !
                </Button>
              </div>

            </div>
          </Modal.Body>
        </Modal> : ""
      }
    </>
  );
}

export default Modals;
