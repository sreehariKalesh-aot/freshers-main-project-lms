import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddBookModal({
  handleCloseAddBook,
  showAddBook,
}) {
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
              type="text"
              placeholder="Eg: Pride and Prejudice"
              autoFocus
              //   onChange={handleAddTitle}
              //   value={title}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Add"
          >
            <Form.Label className="modal-labels">Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: Jane Austen"
              //   onChange={handleAddTitle}
              //   value={title}
            />
          </Form.Group>
          <Form.Label className="modal-labels">Language</Form.Label>
          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Select Language</option>
            <option value="1">English</option>
            <option value="2">Malayalam</option>
            <option value="3">Hindi</option>
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
          }}
        >
          Add Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookModal;
