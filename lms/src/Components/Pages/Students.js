import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AddStudent from "../Modals/AddStudent";

function Students() {
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  return (
    <>
      <div className="pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">Students</p>
          <hr />
          <div className="d-flex justify-content-between">
            {/* <input type="search" className='col-5 searchinput p-1 mt-3' placeholder='Search by student name or email' name="" id="" /> */}
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
              />
            </div>

            <button className="orngbtn me-4 mt-2" onClick={handleShowAdd}>Add New Student</button>
          </div>
        </div>
      </div>
      {showAdd &&<AddStudent showAdd={setShowAdd} setShowAdd={setShowAdd} handleShowAdd={handleShowAdd} handleCloseAdd={handleCloseAdd}/>}
    </>
  );
}

export default Students;
