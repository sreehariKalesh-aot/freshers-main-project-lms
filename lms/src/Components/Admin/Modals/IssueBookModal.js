import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import shortid from "shortid";
function IssueBookModal({
  showIssuedBooks,
  handleCloseIssuedBooks,
  allBooksArr,
  setallBooksArr,
  studentArr,
  setstudentArr,
  issuedBooksArr,
  setissuedBooksArr
  
}) {
  // usestate for taking input from the issued bok modal input box
  const [selectBook, setselectBook] = useState("")
  const [selectStudent, setselectStudent] = useState("")
  const [issueDate, setissueDate] = useState("")
  const [dueDate, setdueDate] = useState("")

  // onchange functions for taking input from the issued book modal
const handleSelectBook=(e)=>{
    setselectBook(e.target.value)
}
const handleSelectStudent=(e)=>{
  setselectStudent(e.target.value)
}
const handleIssueDate=(e)=>{
  setissueDate(e.target.value)
}
const handleDueDate=(e)=>{
  setdueDate(e.target.value)
}

const handleIssueBook=()=>{
  console.log(selectBook)
  setissuedBooksArr([...issuedBooksArr,{
    key: shortid.generate(),
    iBook: selectBook,
    iStudent:selectStudent,
    iDate: issueDate,
    iDueDate:dueDate
  }])
  console.log(issuedBooksArr)
}
  return (

    <Modal show={showIssuedBooks} onHide={handleCloseIssuedBooks}>
      <Modal.Header closeButton>
        <Modal.Title>Issue Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1Issue"
          >
            <Form.Label className="modal-labels">Book</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example 1" value={selectBook} onChange={handleSelectBook}>
              <option>Select Book</option>
              {allBooksArr.map((book) => {
                return (
                  <>
                    <option value={book.bName}>{book.bName}</option>
                  </>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issue"
          >
            <Form.Label className="modal-labels">Student</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example 2" value={selectStudent} onChange={handleSelectStudent}>
              <option>Select Student</option>
              {studentArr.map((student) => {
                return (
                  <>
                    <option value={student.name}>{student.name}</option>
                  </>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issuesd"
          >
            <Form.Label className="modal-labels">Issue Date</Form.Label>
            <Form.Control type="date" value={issueDate} onChange={handleIssueDate}/>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issuesdda"
          >
            <Form.Label className="modal-labels">Due Date</Form.Label>
            <Form.Control type="date" value={dueDate} onChange={handleDueDate}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleCloseIssuedBooks} onChange={handleDueDate}>
          cancel
        </Button>
        <Button
          style={{ backgroundColor: "#ED7966", color: "white" }}
          variant="light"
          onClick={() => {
            handleCloseIssuedBooks();handleIssueBook()
          }}
        >
          Issue Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IssueBookModal;
