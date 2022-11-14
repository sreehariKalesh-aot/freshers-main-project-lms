import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Form from "react-bootstrap/Form";

function StudentDetails() {
  return (
    <>
      <div className="pges">
        <div className="pg-container">
          {/* <p className="pt-4  login-p "></p> */}
          <div className="d-flex align-items-center pt-4">
            <IoIosArrowBack/>
             <p className="m-0">Students /</p>
            <p className="m-0">Nitha Samuel</p>
          </div>
<hr />
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">
          <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
              />
            </div>
          <div className="row border-bottom mt-3" >
            <p className="col d-flex justify-content-start pg-headings">Book Title</p>
            <p className="col d-flex justify-content-center pg-headings">Student</p>
            <p className="col d-flex justify-content-center pg-headings">Issue Date</p>
            <p className="col d-flex justify-content-center pg-headings">Due Date</p>
            <p className="col d-flex justify-content-center pg-headings">Fine <br></br>(Rs. 10 per day) </p>
            <p className="col d-flex justify-content-center pg-headings">Actions</p>
          </div>

          <div className="row mt-4 mb-4 border-bottom">
            <p className="col d-flex justify-content-start  pg-items">It Start With Us</p>
            <p className="col d-flex justify-content-center  pg-items">Nitha Samuel </p>
            <p className="col d-flex justify-content-center  pg-items">02-11-2022 </p>
            <p className="col d-flex justify-content-center   pg-items">09-11-2022</p>
            <p className="col d-flex justify-content-center  pg-items">10</p>
            <p className="col d-flex justify-content-center gap-3">sdf</p>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
