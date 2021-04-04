import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/brand-logo-laptop.svg";
import DashboardIcon from "../../assets/images/dashboard.svg";
import Dashboard2Icon from "../../assets/images/dashboard-2.svg";

const Sidebar = () => {
  const [openLinkStatus, setOpenLinkStatus] = useState(false);

  return (
    <div className="b-sidebar">
      <div className="b-sidebar__header">
        <div className="b-sidebar__header__logo">
          <img src={Logo} alt="icon" />
        </div>
        <div className="b-sidebar__header__brand">TRACMOBILITY</div>
      </div>
      <div className="b-sidebar__nav-menu">
        <ul className="b-sidebar__nav-menu__node-list">
          <li>
            <img src={DashboardIcon} alt="icon" />
            <NavLink to="/">
              <span>KPI Dashboard</span>
            </NavLink>
          </li>
        </ul>
        <ul className="b-sidebar__nav-menu__node-list">
          <span className="b-sidebar__nav-menu__node-list__title">
            Task Management
          </span>
          <li>
            <img src={Dashboard2Icon} alt="icon" />
            <NavLink to="/task-map">
              <span>Task Map</span>
            </NavLink>
          </li>
          <li>
            <img src={Dashboard2Icon} alt="icon" />
            <NavLink to="/task-list">
              <span>Task List</span>
            </NavLink>
          </li>
          <li>
            <ul className="b-sidebar__nav-menu__node-list__child-node">
              <div className="b-sidebar__nav-menu__node-list__child-node__title">
                <img src={Dashboard2Icon} alt="icon" />
                <span onClick={() => setOpenLinkStatus(!openLinkStatus)}>
                  Vehicle Information
                </span>
              </div>
              <li className={openLinkStatus ? "d-block" : "d-none"}>
                <NavLink to="/">
                  <span>Vehicle List</span>
                </NavLink>
              </li>
              <li className={openLinkStatus ? "d-block" : "d-none"}>
                <NavLink to="/">
                  <span>Vehicle Map</span>
                </NavLink>
              </li>
              <li className={openLinkStatus ? "d-block" : "d-none"}>
                <NavLink to="/">
                  <span>Vehicle Search</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
