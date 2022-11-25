import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import AddStudent from "../Modals/AddStudentModal";
import { BiTrash } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { studentContext } from "../../../App";
import DeleteStudentModal from "../Modals/DeleteStudentModal";
import Navbar from "../../Navbar";
import ReactTooltip from "react-tooltip";
import LinesEllipsis from "react-lines-ellipsis";

// import StudentDetails from "./StudentDetails";
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

  // use state for editing
  const [isEditing, setisEditing] = useState(false);
  const [editKey, seteditkey] = useState();
  const [editName, seteditName] = useState("");
  const [editEmail, seteditEmail] = useState("");
  const [editPassword, seteditPassword] = useState("");
  const [editCpassword, seteditCPassword] = useState("");

  // function to pass key for deletion
  const [studentKey, setstudentKey] = useState("");
  const handleStudentKey = (studentKey) => {
    setstudentKey(studentKey);
  };

  const navigate = useNavigate();

  // use state for searching
  const [search, setsearch] = useState("");

  return (
    <>
      <Navbar />
      <div className="pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">Students</p>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
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

            {studentArr
              .filter((student) => {
                if (search === "") {
                  return student;
                } else if (
                  student.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return student;
                } else if (
                  student.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return student;
                }
              })
              .map((student) => {
                return (
                  <div
                    className="row mt-4 mb-4 border-bottom"
                    key={student.key}
                  >
                    <p className="col d-flex justify-content-start pg-items">
                      {student.name}
                    </p>
                    <p className="col d-flex justify-content-center pg-items">
                      {student.email}
                    </p>
                    <div className="col d-flex justify-content-end gap-4">
                      <MdEdit
                        data-tip="Edit"
                        size={20}
                        style={{ fill: "#7E7E7F" }}
                        onClick={() => {
                          setisEditing(true);
                          handleShowAdd();
                          seteditkey(student.key);
                          seteditName(student.name);
                          seteditEmail(student.email);
                          seteditPassword(student.password);
                          seteditCPassword(student.cPassword);
                        }}
                      />{" "}
                      <BiTrash
                        data-tip="Delete"
                        size={20}
                        style={{ fill: "#D04444" }}
                        onClick={() => {
                          handleShowDelete();
                          handleStudentKey(student.key);
                        }}
                      />{" "}
                      <HiOutlineEye
                        data-tip="View student details"
                        size={20}
                        style={{ color: "#7E7E7F" }}
                        onClick={() => {
                          navigate(`/students/${student.key}`);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ReactTooltip />

      {showAdd && (
        <AddStudent
          showAdd={setShowAdd}
          handleCloseAdd={handleCloseAdd}
          studentArr={studentArr}
          setstudentArr={setstudentArr}
          isEditing={isEditing}
          setisEditing={setisEditing}
          editKey={editKey}
          seteditkey={seteditkey}
          editName={editName}
          seteditName={seteditName}
          editEmail={editEmail}
          seteditEmail={seteditEmail}
          editPassword={editPassword}
          seteditPassword={seteditPassword}
          editCpassword={editCpassword}
          seteditCPassword={seteditCPassword}
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
