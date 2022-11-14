import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function IssueBookModal({showIssuedBooks,handleCloseIssuedBooks}) {
  return (
    <Modal show={showIssuedBooks} onHide={handleCloseIssuedBooks}>
    <Modal.Header closeButton>
      <Modal.Title>Issue Book</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1Issue">
          <Form.Label className="modal-labels">Book</Form.Label>
          <Form.Select className="mb-3" aria-label="Default select example 1">
          <option>Select Book</option>
          <option value="1">English</option>
          <option value="2">Malayalam</option>
          <option value="3">Hindi</option>
        </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1Issue"
        >
          <Form.Label className="modal-labels">Student</Form.Label>
          <Form.Select className="mb-3" aria-label="Default select example 2">
          <option>Select Student</option>
          <option value="1">English</option>
          <option value="2">Malayalam</option>
          <option value="3">Hindi</option>
        </Form.Select>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1Issuesd">
        <Form.Label className="modal-labels">Issue Date</Form.Label>
        <Form.Control
              type="date"
              
            />
        </Form.Group>

        <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1Issuesdda">
        <Form.Label className="modal-labels">Due Date</Form.Label>
        <Form.Control
              type="date"
              
            />
        </Form.Group>

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-secondary" onClick={handleCloseIssuedBooks}>
        cancel
      </Button>
      <Button
        style={{ backgroundColor: "#ED7966", color: "white" }}
        variant="light"
        onClick={() => {
          handleCloseIssuedBooks();
        }}
      >
        Issue Book
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default IssueBookModal