import React, { useState } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
                <div>
                  <Form.Label className='px-1'>Label</Form.Label>
                  <span>{textAreaCount}/250</span>
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
          <Modal.Header className='px-5 pt-4' closeButton>
            <div className='row'>
              <div className='col-4'>
                Image
              </div>
              <div className='col-6  bg-primary'>
                <Modal.Title >Modal heading</Modal.Title>
                <Button variant="success" onClick={handleClose2}>
                  Okay Thanks !
                </Button>
              </div>
              <div></div>
            </div>
          </Modal.Header>
        </Modal> : ""
      }
    </>
  );
}

export default Modals;
