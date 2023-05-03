import React, { useEffect, useState } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Logo from '../jsonfiles/Sent.png';

import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import axios from 'axios';


const Modals = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [emails, setEmails] = useState(["SridharNaidu12018m@gmail.com", "TejasriGamidi@gamil.com", "Sridharshree303@gmail.com", "Lavanya@gmail.com"]);
  const [textAreaCount, setTextAreaCount] = React.useState(0);
  const [disable, setDisable] = React.useState(false);
  const [email, setEmail] = useState({
    geteId: 0,
    recipient: [
      ""
    ],
    msgBody: "Wish You a Very Happy Birthday",
    subject: "Happy Birthday!",
    attachment: ""
  });

  const handleClose = () => {
    setShow(false);
    setDisable(false);
    setTextAreaCount(0);
  }

  const handleShow = () => setShow(true);
  const handleShow2 = () => {
    submithandler();
  }

  const [response, setResponse] = useState("");

  const submithandler = () => {
    axios.post(`http://localhost:8082/sendMail`, email).then(
      res => {
        setResponse(res.data);
        console.log(res.data);
        console.log(response + "----");
      }
    ).then(() => {
      if (response.length > 1) {
        setShow(false)
        setShow2(true)
      } else {
        alert("Something went wrong!")
      }
    }).catch(err => {
      setResponse("");
      console.log(err);
    })
  }

  const handleClose2 = () => {
    setShow2(false);
    setDisable(false);
    setTextAreaCount(0);
  }

  //useffect hook
  useEffect(() => {
    email.recipient = emails;
    if (email.recipient.length === 0 || email.msgBody.length > 250) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    setTextAreaCount(email.msgBody.length);

  }, [emails, email, disable])

  //change handler
  const changeHandler = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value })
  }

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
                          index === 2
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
              </Form.Group>

              <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='birthdayMessage'
                  type="text"
                  name="subject"
                  onChange={changeHandler}
                  placeholder="Enter message"
                  defaultValue={email.subject}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlTextarea1">
                <div className=' pt-2'>
                  <Form.Label className='px-1'>Label</Form.Label>
                  <span className='right'>{textAreaCount}/250</span>
                </div>
                <Form.Control as="textarea" name="msgBody" value={email.msgBody} onChange={changeHandler} rows={5} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='modalOneBtn p-2' variant="info  fw-bold" onClick={handleClose}>
              Discard
            </Button>
            <Button className='modalOneBtn p-2' disabled={disable} variant="primary fw-bold" onClick={handleShow2}>
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
                <img src={Logo} className="rounded float-left Logo" alt="..." />
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
