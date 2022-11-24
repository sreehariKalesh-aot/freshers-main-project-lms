import React from "react";
import {
  MdMenuBook,
  MdOutlinePeople,
  MdTaskAlt,
  MdLocalLibrary,
  MdLogout,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";


function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    navigate("/")
  }
  return (
    <div className="nvbar col-2">
      <div className="d-flex align-items-center gap-3 logodiv">
        <MdLocalLibrary className="mt-5 " size={41} style={{ fill: "white" }} />
        <p className="mt-5 pt-3 lms2">LMS</p>
      </div>

      <div className="btn-container">
        <NavLink to="/issuedbooks">
          <button className="btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdTaskAlt size={20} />
            Issued Books
          </button>
        </NavLink>
        <NavLink to="/allbooks">
          <button className="btn mt-4  navcomp navcomp2 d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdMenuBook size={20} />
            All Books
          </button>
        </NavLink>
        <NavLink to="/students">
          {" "}
          <button className="btn mt-4 navcomp navcomp3 d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdOutlinePeople size={20} />
            Students
          </button>
        </NavLink>
      </div>

      <div className="logout" data-tip="Logout">
        <div className="d-flex align-items-center justify-content-start gap-3 border-top pt-3 ms-3 me-3" onClick={handleLogout}>
          <FaUserCircle size={30} style={{ color: "white" }} />
          <div>
            <p className="m-0 mb-2 username">name</p>
            <p className="m-0 mt-1 useremail">@gmail.com</p>
          </div>
          {/* <MdLogout size={30} style={{ color: "white" }} className="ms-5"/> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
