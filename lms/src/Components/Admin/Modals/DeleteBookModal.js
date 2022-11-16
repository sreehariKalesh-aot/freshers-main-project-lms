import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteBookModal({
  handleCloseDeleteBook,
  allBooksArr,
  setallBooksArr,
  showdeleteBook,
  bookKey,
}) {
  const handleDeleteBook = (bookKey) => {
    console.log(bookKey);
    setallBooksArr(allBooksArr.filter((book) => book.key !== bookKey));
    console.log(allBooksArr);
  };

  return (
    <Modal show={showdeleteBook} onHide={handleCloseDeleteBook}>
      {/* <Modal.Header  closeButton > */}
      <Modal.Title
        style={{
          textAlign: "center",
        }}
        className="pt-4"
      >
        Delete book?
      </Modal.Title>
      {/* </Modal.Header> */}
      <Modal.Body
        style={{
          textAlign: "center",
        }}
      >
        Are you sure you want to delete this Book?
      </Modal.Body>
      <div className="d-flex justify-content-center pb-4 gap-4">
        <Button variant="secondary" onClick={handleCloseDeleteBook}>
          cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleCloseDeleteBook();
            handleDeleteBook(bookKey);
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteBookModal;
