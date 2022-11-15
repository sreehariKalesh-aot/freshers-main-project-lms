import React from "react";
import Form from "react-bootstrap/Form";
import { useState, createContext, useContext } from "react";
import AddStudent from "../Modals/AddStudentModal";
import { BiTrash } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { studentContext } from "../../../App";
import DeleteStudentModal from "../Modals/DeleteStudentModal";

function Students() {
  const [studentArr, setstudentArr] = useContext(studentContext);

  // use state and functions for add student modal
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  // use state and functions to delete confirmation modal
  const [showdelete, setShowdelete] = useState(false);

  const handleCloseDelete = () => setShowdelete(false);
  const handleShowDelete = () => setShowdelete(true);
  const [studentKey, setstudentKey] = useState("");
  const handleStudentKey=(studentKey)=>{
        setstudentKey(studentKey)
        console.log(studentKey)

  }

  const navigate = useNavigate();
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
              <p className="col d-flex justify-content-start pg-headings">
                Name
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Email
              </p>
              <p className="col d-flex justify-content-end pg-headings">
                Actions
              </p>
            </div>

            {studentArr.map((student) => {
              return (
                <div className="row mt-4 mb-4 border-bottom" key={student.key}>
                  <p className="col d-flex justify-content-start pg-items">
                    {student.name}
                  </p>
                  <p className="col d-flex justify-content-center pg-items">
                    {student.email}
                  </p>
                  <div className="col d-flex justify-content-end gap-4">
                    <MdEdit size={20} style={{ fill: "#7E7E7F" }} />{" "}
                    <BiTrash
                      size={20}
                      style={{ fill: "#D04444" }}
                      onClick={()=>{handleShowDelete();handleStudentKey(student.key)}}
                    />{" "}
                    <HiOutlineEye
                      size={20}
                      style={{ color: "#7E7E7F" }}
                      onClick={() => navigate("/studentDetails")}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showAdd && (
        <AddStudent
          showAdd={setShowAdd}
          handleCloseAdd={handleCloseAdd}
          studentArr={studentArr}
          setstudentArr={setstudentArr}
        />
      )}
      {showdelete && (
        <DeleteStudentModal
          studentKey={studentKey}
          showdelete={showdelete}
          handleCloseDelete={handleCloseDelete}
          studentArr={studentArr}
          setstudentArr={setstudentArr}
        />
      )}
    </>
  );
}

export default Students;
