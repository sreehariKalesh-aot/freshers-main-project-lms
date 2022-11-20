import React from "react";
import {
  MdMenuBook,
  MdOutlinePeople,
  MdTaskAlt,
  MdLocalLibrary,
} from "react-icons/md";

// import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
// import Button from "react-bootstrap/esm/Button";
import "react-web-tabs/dist/react-web-tabs.css";
// import Students from "./Pages/Students";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nvbar col-2">
      <div className="d-flex align-items-center gap-3 ms-4">
        <MdLocalLibrary className="mt-5 " size={41} style={{ fill: "white" }} />
        <p className="mt-5 pt-3 lms2">LMS</p>
      </div>

      {/* tabs using a href */}
      <NavLink to="/issuedbooks">
        <button className="  mt-4 navcomp navcomp1">
          <div className="d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdTaskAlt size={20} />
            <p className="mb-0">Issued Books</p>
          </div>
        </button>
      </NavLink>
      {/* <button className="d-flex align-items-center gap-3"></button> */}
      <NavLink to="/allbooks">
        <button className=" mt-4  navcomp navcomp2">
          <div className="d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdMenuBook size={20} />
            <p className="mb-0">All Books</p>
          </div>
        </button>
      </NavLink>
      <NavLink to="/students">
        {" "}
        <button className="mt-4 navcomp navcomp3">
          <div className="d-flex align-items-center gap-3 ps-3 pt-2 pb-2">
            <MdOutlinePeople size={20} />
            <p className="mb-0">Students</p>
          </div>
        </button>
      </NavLink>
      {/* <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList className="tabbs">
          <Tab tabFor="vertical-tab-one" className="d-flex align-items-center gap-3 mt-5">
            <MdTaskAlt  size={20} />
            <p className="mb-0">Issued Books</p>
          </Tab>
          <Tab tabFor="vertical-tab-two" className="d-flex align-items-center gap-3">
            <MdMenuBook size={20}/>
            <p className="mb-0">All Books</p>
          </Tab>
          <Tab tabFor="vertical-tab-three"className="d-flex align-items-center gap-3">
            <MdOutlinePeople size={20}/>
            <p className="mb-0">Students</p>
          </Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <p>Tab 1ntent</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
          <p>Tab 3 contczxcent</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>

      </Tabs> */}
    </div>
  );
}

export default Navbar;
