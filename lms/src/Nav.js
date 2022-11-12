import React from "react";
import {
  MdMenuBook,
  MdOutlinePeople,
  MdTaskAlt,
  MdLocalLibrary,
} from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Nav() {
  return (
    <div className="nvbar">
      <div className="d-flex align-items-center gap-3 ms-4">
        <MdLocalLibrary className="mt-5 " size={41} style={{ fill: "white" }} />
        <p className="mt-5 pt-3 lms2">LMS</p>
      </div>
      <Tabs>
        <TabList>
          <Tab className="d-flex align-items-center gap-3 mt-5">
            <MdTaskAlt size={20} />
            <p className="mb-0">Issued Books</p>
          </Tab>
          <Tab className="d-flex align-items-center gap-3 mt-5">
            <MdMenuBook size={20} />
            <p className="mb-0">All Books</p>
          </Tab>
          <Tab className="d-flex align-items-center gap-3 mt-5">
            <MdOutlinePeople size={20} />
            <p className="mb-0">Students</p>
          </Tab>
        </TabList>

        <TabPanel className="tbpnl">
        <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            {/* <h2>Any content 3</h2> */}
            
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Nav;
