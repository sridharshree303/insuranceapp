import React, { useState } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Modals = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
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
    console.log("handleClose2");
  }

  const [emails,setEmails] = useState(["Sridhar","Tejasri","Lavanya"]);
  const [message,setMessage] = useState(["Wish You a Very Happy Birthday"]);


  return (
    <>
      <Button className='modalButton px-3' variant="light" onClick={handleShow}>
        Send Wishes
      </Button>

      {show ?
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>To</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  defaultValue={emails}
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Control
                  className='birthdayMessage'
                  type="text"
                  placeholder="Enter message"
                  defaultValue={message}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Label</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Discard
            </Button>
            <Button variant="info" size='md' onClick={handleShow2}>
              Send
            </Button>
          </Modal.Footer>
        </Modal> : ""
      }

      {show2 ?
        <Modal centered size='xl bottom' show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Modal Two</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose2}>
              Okay Thanks !
            </Button>
          </Modal.Footer>
        </Modal> : ""
      }
    </>
  );
}

export default Modals;
