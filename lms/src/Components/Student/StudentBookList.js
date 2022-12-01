import React from 'react'

function StudentBookList({obj}) {
  return (
    <div className="row mt-4 mb-4 border-bottom">
    <p className="col d-flex justify-content-start  pg-items">
      {obj.bookTitle}
    </p>
    <p className="col d-flex justify-content-center   pg-items">
      {obj.author}
    </p>
    <p className="col d-flex justify-content-center  pg-items">
      {obj.issueDate}
    </p>
    {/* {issuedBooks.iStudent} */}
    <p className="col d-flex justify-content-center  pg-items">
      {obj.dueDate}
    </p>
    <p className="col d-flex justify-content-center   pg-items">
      {obj.returnDate ? obj.returnDate: "-"}
    </p>
    <p className="col d-flex justify-content-center  pg-items">
      {obj.fine}
    </p>
  </div>
  )
}

export default StudentBookList