import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import shortid from "shortid";
function IssueBookModal({
  showIssuedBooks,
  handleCloseIssuedBooks,
  allBooksArr,
  setallBooksArr,
  studentArr,
  setstudentArr,
  issuedBooksArr,
  setissuedBooksArr,
  // dueDatecalc,
  // setdueDatecalc,
  
}) {
  // usestate for taking input from the issued bok modal input box
  const [selectBook, setselectBook] = useState("")
  const [selectbookBookName, setselectbookBookName] = useState("")
  const [selectStudent, setselectStudent] = useState("")
  const [selectStudentName, setselectStudentName] = useState("")
  const [issueDate, setissueDate] = useState("")
  const [dueDate, setdueDate] = useState("")

  // onchange functions for taking input from the issued book modal
const handleSelectBook=(e)=>{
    setselectBook(e.target.value)
    setremainingBookId(e.target.value)
    setselectbookBookName(e.target.key)
    console.log(e.target.key)
}
const handleSelectStudent=(e)=>{
  setselectStudent(e.target.value)
  setselectStudentName(e.target.key)
}
const handleIssueDate=(e)=>{
  setissueDate(e.target.value)
}
const handleDueDate=(e)=>{
  setdueDate(e.target.value)
  
  setdueDatecalc(new Date(e.target.value))
  console.log(dueDatecalc)

}


// const handleselectbookBookName=(e)=>{
//   setselectbookBookName(e.target.name)
//   console.log("selected book",selectbookBookName)
// }

// const handleselectStudentName=(e)=>{
//   setselectStudentName(e.target.name)
// }

// use state for errors in issued books
const [issuedBookError, setissuedBookError] = useState(false)


const handleIssueBook=()=>{
  if(!selectBook||!selectStudent||!issueDate||!dueDate){
    setissuedBookError(true)

  }
  else{

    handleCloseIssuedBooks();
    calculateFine();
    // setremainingBookId(selectBook)

    setissuedBooksArr([...issuedBooksArr,{
      key: shortid.generate(),
      iBook: selectBook,
      iBookName : selectbookBookName,
      iStudent:selectStudent,
      iStudentName:selectStudentName,
      iDate: issueDate,
      iDueDate:dueDate,
      fine: fine,
      isReturned:false,
      returnDate: null
    }])
    console.log(issuedBooksArr)
    console.log(remainingBookId)

  }
 
}
// usestate for taking the name of the book on issuing the book for changing the remaning copies
const [remainingBookId, setremainingBookId] = useState("")
// const [remainingCount, setremainingCount] = useState()
// 


const handleUpdateCount=()=>{
  // var index = allBooksArr.findIndex(book => book.bName === remainingBookId);
    // setremainingCount(allBooksArr[index].value++)
    // console.log(remainingCount)

    setallBooksArr(
      allBooksArr.map((book) => {
        if (book.key === remainingBookId) {
      
          // setremainingCount(book.remainingCopies++)
          // setremainingCount(book['remainingCopies']++)
          return {
            ...book,
            remainingCopies: book.remainingCopies - 1
          };
        }
        return book;
      })
    );
}

// for setting due date a default value
const [dueDatecalc, setdueDatecalc] = useState(new Date());


const [fine, setfine] = useState("");

// function for calculating fine
const calculateFine=()=>{ 
  const today = new Date();
  // let diffInTime = today.getTime() - dueDatecalc.getTime();
  let Difference = Math.floor((today.getTime() - dueDatecalc.getTime())/ (1000 * 3600 * 24))
  setfine(Math.round(Difference*10))
  if (fine < 0){
    setfine("-")
  }

} 

// for calculating the fine everytime the page renders
useEffect(() => {
  calculateFine()

})


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
            <Form.Select className="mb-3" aria-label="Default select example 1" value={selectBook
            } key={selectbookBookName}  onChange={handleSelectBook}>
              <option>Select Book</option>
              {allBooksArr.map((book) =>
               {
                if(book.remainingCopies > 0){
                  return (
                  <>
                    <option value={book.key}  key={book.bName} >{book.bName}</option>
                  </>
                );
                }
                
              })}
            </Form.Select>
            {issuedBookError && !selectBook? <p className="error">Please select a book</p>:""}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issue"
          >
            <Form.Label className="modal-labels">Student</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example 2" value={selectStudent} key={selectStudentName}  onChange={handleSelectStudent}>
              <option>Select Student</option>
              {studentArr.map((student) => {
                return (
                  <>
                    <option value={student.key} key={student.name}  
                      >{student.name}</option>
                  </>
                );
              })}
            </Form.Select>
            {issuedBookError && !selectStudent? <p className="error">Please select a student</p>:""}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issuesd"
          >
            <Form.Label className="modal-labels">Issue Date</Form.Label>
            <Form.Control type="date" value={issueDate} onChange={handleIssueDate}/>
            {issuedBookError && !issueDate? <p className="error">Please select a date</p>:""}
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Issuesdda"
          >
            <Form.Label className="modal-labels">Due Date</Form.Label>
            <Form.Control type="date" value={dueDate} onChange={handleDueDate}/>
            {issuedBookError && !dueDate? <p className="error">Please select a date</p>:""}
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
            handleIssueBook();handleUpdateCount();
          }}
        >
          Issue Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IssueBookModal;
