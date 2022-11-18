import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function MarkReturned({handleCloseReturned,showReturned,setshowReturned,isReturned,setisReturned,issuedBooksArr,setissuedBooksArr,issuedKey}) {

    const handleBookReturn=(issuedKey)=>{
        // no need of this use state u can directly set true
        setisReturned(true) 
        console.log(issuedKey)
        
        setissuedBooksArr(
            issuedBooksArr.map((book) => {
                  if (book.key === issuedKey) {
                    console.log("entered issued if")
                    return {
                      ...book,
                    isReturned: true
                    };
                  }
                  return book;
                })
              );
        
                console.log(issuedBooksArr)
    }

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
            handleBookReturn(issuedKey)
            // handleDeleteBook(bookKey);
          }}
        >
          Yes
        </Button>
      </div>
    </Modal>
  )
}

export default MarkReturned