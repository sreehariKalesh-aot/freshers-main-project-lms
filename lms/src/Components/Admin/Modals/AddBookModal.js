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
}) {
  // usestate to take data from add books modal's input field
  const [addBooks, setaddBooks] = useState({
    bName: "",
    author: "",
    language: "",
    totalCopies: "",
    remainingCopies: "",
  });

  // function to take data on change from modal form
  const handleBookInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setaddBooks({ ...addBooks, [name]: value });
    console.log(addBooks);
  };

  const handleAddBook = () => {
    setallBooksArr([
      ...allBooksArr,
      {
        key: shortid.generate(),
        bName: addBooks.bName,
        author: addBooks.author,
        language: addBooks.language,
        totalCopies: addBooks.totalCopies,
        remainingCopies: addBooks.remainingCopies,
      },
    ]);
    console.log(allBooksArr)
  };
  return (
    <Modal show={showAddBook} onHide={handleCloseAddBook}>
      <Modal.Header closeButton>
        <Modal.Title>Add Book</Modal.Title>
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
              value={addBooks.bName}
              onChange={handleBookInput}
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
            onChange={handleBookInput}
            value={addBooks.author}
            />
          </Form.Group>
          <Form.Label className="modal-labels">Language</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="language"
            value={addBooks.language}
            onChange={handleBookInput}
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
                value={addBooks.totalCopies}
                onChange={handleBookInput}
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
                value={addBooks.remainingCopies}
                onChange={handleBookInput}
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleCloseAddBook}>
          cancel
        </Button>
        <Button
          style={{ backgroundColor: "#ED7966", color: "white" }}
          variant="light"
          onClick={() => {
            handleCloseAddBook();
            handleAddBook();
          }}
        >
          Add Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookModal;
