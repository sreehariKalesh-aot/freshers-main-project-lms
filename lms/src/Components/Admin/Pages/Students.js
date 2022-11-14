import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AddStudent from "../Modals/AddStudent";
import {BiTrash} from 'react-icons/bi'
import {HiOutlineEye} from "react-icons/hi";
import {MdEdit} from "react-icons/md";
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

            <button className="orngbtn me-4 mt-2" onClick={handleShowAdd}>
              Add New Student
            </button>
          </div>

        <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">

        
          <div className="row border-bottom">
            <p className="col d-flex justify-content-start pg-headings">Name</p>
            <p className="col d-flex justify-content-center pg-headings">Email</p>
            <p className="col d-flex justify-content-end pg-headings">Actions</p>
          </div>
          <div className="row mt-4 mb-4 border-bottom">
            <p className="col d-flex justify-content-start pg-items">Nitha Samuel</p>
            <p className="col d-flex justify-content-center pg-items">Nitha Samuel</p>
            <div className="col d-flex justify-content-end gap-4"><MdEdit size={20} style={{ fill: "#7E7E7F" }}/> <BiTrash size={20} style={{ fill: "#D04444" }}/> <HiOutlineEye size={20} style={{ color: "#7E7E7F" }}/></div>
          </div>
          </div>
        </div>
      </div>
      {showAdd && (
        <AddStudent showAdd={setShowAdd} handleCloseAdd={handleCloseAdd} />
      )}
    </>
  );
}

export default Students;
