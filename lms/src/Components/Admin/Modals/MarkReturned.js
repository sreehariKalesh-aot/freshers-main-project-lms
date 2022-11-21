import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MarkReturned({
  handleCloseReturned,
  showReturned,
  setshowReturned,
  isReturned,
  setisReturned,
  issuedBooksArr,
  setissuedBooksArr,
  issuedKey,
  returnedBookId,
  allBooksArr,
  setallBooksArr,
}) {
  // const [returnedBookName, setreturnedBookName] = useState(null)

  const handleBookReturn = (issuedKey) => {
    // no need of this use state u can directly set true
    setisReturned(true);
    console.log(issuedKey);

    setissuedBooksArr(
      issuedBooksArr.map((book) => {
        if (book.key === issuedKey) {
          // console.log(book.iBook)
          // setreturnedBookName(book.iBook)
          // console.log(returnedBookName)
          return {
            ...book,
            isReturned: true,
            returnDate: new Date()
          };
        }
        return book;
      })
    );

    console.log("entered handle returned actions");
    // console.log(returnedBookName)
    setallBooksArr(
      allBooksArr.map((book) => {
        console.log("outside if");
        if (book.key === returnedBookId) {
          console.log("entered updating remaining book count incrementing");
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

    console.log(issuedBooksArr);
  };

  return (
    <Modal show={showReturned} onHide={handleCloseReturned} key={issuedKey}>
      {/* <Modal.Header  closeButton > */}
      <Modal.Title
        style={{
          textAlign: "center",
        }}
        className="pt-4"
      >
        Mark as returned?
      </Modal.Title>
      {/* </Modal.Header> */}
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
            // handleReturnActions()
            // handleDeleteBook(bookKey);
          }}
        >
          Yes
        </Button>
      </div>
    </Modal>
  );
}

export default MarkReturned;
