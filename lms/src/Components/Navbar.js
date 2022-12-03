import React from "react";
import {
  MdMenuBook,
  MdOutlinePeople,
  MdTaskAlt,
  MdLocalLibrary,
  MdLogout,
} from "react-icons/md";
import { FaUserCircle, FaBookReader } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

function Navbar({ studentBoolean, studentLoginId, studentArr }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const [navbarBtn, setnavbarBtn] = useState("");

  return (
    <div
      className="nvbar col-2"
      style={{
        backgroundColor: studentBoolean === "student" ? "#303179" : "#ED7966",
      }}
    >
      <div className="d-flex align-items-center gap-3 logodiv">
        <MdLocalLibrary className="mt-5 " size={41} style={{ fill: "white" }} />
        <p className="mt-5 pt-3 lms2">LMS</p>
      </div>

      <div className="btn-container">
        {studentBoolean === "student" ? (
          <NavLink to="/Mybooks">
            <button className="btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
              <FaBookReader size={20} />
              My Books
            </button>
          </NavLink>
        ) : (
          <NavLink to="/issuedbooks" onClick={() => setnavbarBtn("1")}>
            <button
              className={
                navbarBtn === "1"
                  ? "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2 nvbar-btn"
                  : "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2"
              }
              onClick={() => setnavbarBtn("1")}
            >
              <MdTaskAlt size={20} />
              Issued Books
            </button>
          </NavLink>
        )}
        <NavLink to="/allbooks"  onClick={() => setnavbarBtn("2")}>
          <button className={
                navbarBtn === "2"
                  ? "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2 nvbar-btn"
                  : "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2"
              }
              onClick={() => setnavbarBtn("2")}>
            <MdMenuBook size={20} />
            All Books
          </button>
        </NavLink>
        {studentBoolean !== "student" && (
          <NavLink to="/students"    onClick={() => setnavbarBtn("3")}  >
            <button className={
                navbarBtn === "3"
                  ? "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2 nvbar-btn"
                  : "btn  mt-4 navcomp navcomp1 d-flex align-items-center gap-3 ps-3 pt-2 pb-2"
              }
              onClick={() => setnavbarBtn("3")}>
              <MdOutlinePeople size={20} />
              Students
            </button>
          </NavLink>
        )}
      </div>

      <div className="logout" data-tip="Logout">
        <div
          className="d-flex align-items-center justify-content-start gap-3 border-top pt-3 ms-3 me-3"
          onClick={handleLogout}
        >
          <FaUserCircle size={30} style={{ color: "white" }} />
          <div>
            {studentBoolean !== "student" && (
              <>
                <p className="m-0 mb-2 username">Admin</p>
                <p className="m-0 mt-1 useremail">admin@gmail.com</p>
              </>
            )}

            {studentBoolean === "student" &&
              studentArr.map((obj) => {
                if (obj.key === studentLoginId) {
                  return (
                    <>
                      <p className="m-0 mb-2 username">{obj.name}</p>
                      <p className="m-0 mt-1 useremail">{obj.email}</p>
                    </>
                  );
                }
              })}
          </div>
          {/* <MdLogout size={30} style={{ color: "white" }} className="ms-5"/> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
