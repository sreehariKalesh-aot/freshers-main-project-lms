import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MarkReturned({
  handleCloseReturned,
  showReturned,
  setshowReturned,
  issuedBooksArr,
  setissuedBooksArr,
  issuedKey,
  returnedBookId,
  allBooksArr,
  setallBooksArr,
}) {
  // const [returnedBookName, setreturnedBookName] = useState(null)

  const handleBookReturn = (issuedKey) => {


    const thisMonth = new Date().getMonth() + 1;

    setissuedBooksArr(
      issuedBooksArr.map((book) => {
        if (book.key === issuedKey) {
          return {
            ...book,
            isReturned: true,
            returnDate:
              new Date().getFullYear() +
              "-" +
              thisMonth +
              "-" +
              new Date().getDate(),
          };
        }
        return book;
      })
    );

    setallBooksArr(
      allBooksArr.map((book) => {
        if (book.key === returnedBookId) {
          // setremainingCount(book.remainingCopies++)
          // setremainingCount(book['remainingCopies']++)
          return {
            ...book,
            remainingCopies: book.remainingCopies + 1,
          };
        }
        return book;
      })
    );
  };

  return (
    <Modal show={showReturned} onHide={handleCloseReturned} key={issuedKey}>
      <Modal.Title
        style={{
          textAlign: "center",
        }}
        className="pt-4"
      >
        Mark as returned?
      </Modal.Title>
      <Modal.Body
        style={{
          textAlign: "center",
        }}
      >
        Are you sure to mark this book as returned?
      </Modal.Body>
      <div className="d-flex justify-content-center pb-4 gap-4">
        <Button variant="secondary" onClick={handleCloseReturned}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleCloseReturned();
            handleBookReturn(issuedKey);
          }}
        >
          Yes
        </Button>
      </div>
    </Modal>
  );
}

export default MarkReturned;
