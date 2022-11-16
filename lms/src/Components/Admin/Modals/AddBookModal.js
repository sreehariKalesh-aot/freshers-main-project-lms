import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import shortid from "shortid";
function AddBookModal({
  handleCloseAddBook,
  showAddBook,
  allBooksArr,
  setallBooksArr,
  isBookEdit,
  setisBookEdit,
  editBname, 
  seteditBname,
  editAuthor, 
  seteditAuthor,
  editLanguage,
   seteditLanguage,
  editTotalCopies,
   seteditTotalCopies,
  editRemainingCopies,
   seteditRemainingCopies,
   bookKey={bookKey}
  
}) {
  // usestate to take data from add books modal's input field
  // const [addBooks, setaddBooks] = useState({
  //   bName: "",
  //   author: "",
  //   language: "",
  //   totalCopies: "",
  //   remainingCopies: "",
  // });
  const [bName, setbName] = useState('');
  const [author, setauthor] = useState('');
  const [language, setlanguage] = useState('');
  const [totalCopies, settotalCopies] = useState('');
  const [remainingCopies, setremainingCopies] = useState("");


  // function to take data on change from modal form

  // const handleBookInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setaddBooks({ ...addBooks, [name]: value });
  //   console.log(addBooks);
  // };

  const handleBookNameInput=(e)=>{
      setbName(e.target.value)
  }
  const handleAuthorNameInput=(e)=>{
    setauthor(e.target.value)
}

const handleLanguageInput=(e)=>{
  setlanguage(e.target.value)
}

const handleTotalCopiesInput=(e)=>{
  settotalCopies(e.target.value)
}

const handleRemainingCopiesInput=(e)=>{
  setremainingCopies(e.target.value)
}

//functions for taking edit data onchange from the modal form
const handleEditBookNameInput =(e)=>{
  seteditBname(e.target.value)
}
const handleEditAuthorNameInput=(e)=>{
  seteditAuthor(e.target.value)
}
const handleEditLanguageInput=(e)=>{
  seteditLanguage(e.target.value)
}
const handleEditTotalCopiesInput=(e)=>{
  seteditTotalCopies(e.target.value)
}
const handleEditRemainingCopiesInput=(e)=>{
  seteditRemainingCopies(e.target.value)
}
const handleSaveBookEdit=()=>{
    setallBooksArr(
      allBooksArr.map((book) => {
        if (book.key === bookKey) {
          console.log("key checked")
          console.log("save done");
          return {
            ...book,
            bName: editBname,
            author: editAuthor,
            language: editLanguage,
            totalCopies: editTotalCopies,
            remainingCopies: editRemainingCopies
          };
        }
        return book;
      })
    );
    console.log(allBooksArr)
}

  const handleAddBook = () => {
    setallBooksArr([
      ...allBooksArr,
      {
        key: shortid.generate(),
        bName:  bName,
        author: author,
        language: language,
        totalCopies: totalCopies,
        remainingCopies: remainingCopies,
      },
    ]);
    setbName("")
    setauthor("")
    setlanguage("")
    settotalCopies("")
    setremainingCopies("")
    console.log(allBooksArr)
    console.log("add done")
  };
  return (
    <Modal show={showAddBook} onHide={()=>{handleCloseAddBook();setisBookEdit(false)}}>
      <Modal.Header closeButton>
        <Modal.Title>{isBookEdit? "Edit Book":"Add Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1Add">
            <Form.Label className="modal-labels">Name</Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="Eg: Pride and Prejudice"
              autoFocus
              name="bName"
              value={isBookEdit ? editBname : bName}
              // onChange={handleBookNameInput}
              onChange={isBookEdit  ? handleEditBookNameInput :  handleBookNameInput}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Add"
          >
            <Form.Label className="modal-labels">Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Eg: Jane Austen"
            // onChange={handleAuthorNameInput}
            onChange={isBookEdit  ? handleEditAuthorNameInput :  handleAuthorNameInput}
            value={isBookEdit ? editAuthor : author}
            />
          </Form.Group>
          <Form.Label className="modal-labels">Language</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="language"
            value={isBookEdit ? editLanguage : language}
            // onChange={handleLanguageInput}
            onChange={isBookEdit  ? handleEditLanguageInput :  handleLanguageInput}
          >
            <option>Select Language</option>
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Hindi">Hindi</option>
          </Form.Select>
          <div className="d-flex justify-content-between">
            <Form.Group
              className="mb-3 col-5.5"
              controlId="exampleForm.ControlInput4Add"
            >
              <Form.Label className="modal-labels">Total Copies</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                name="totalCopies"
                value={isBookEdit ? editTotalCopies : totalCopies}
                // onChange={handleTotalCopiesInput}
                onChange={isBookEdit  ? handleEditTotalCopiesInput :  handleTotalCopiesInput}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-5.5"
              controlId="exampleForm.ControlInput5Add"
            >
              <Form.Label className="modal-labels">Remaining</Form.Label>
              <Form.Control
                type="text"
                placeholder="2"
                name="remainingCopies"
                value={isBookEdit ? editRemainingCopies : remainingCopies}
                // onChange={handleRemainingCopiesInput}
                onChange={isBookEdit  ? handleEditRemainingCopiesInput :  handleRemainingCopiesInput}
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={()=>{handleCloseAddBook();setisBookEdit(false)}}>
          cancel
        </Button>
        <Button
          style={{ backgroundColor: "#ED7966", color: "white" }}
          variant="light"
          onClick={() => {
            handleCloseAddBook();{isBookEdit? handleSaveBookEdit() : handleAddBook();setisBookEdit(false)}
          }}
        >
          {isBookEdit? "Save Edits":"Add Book"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookModal;
