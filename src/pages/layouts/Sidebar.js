import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/brand-logo-laptop.svg";

const Sidebar = () => {
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
            <NavLink to="/task-map">
              <span>Task Map</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/task-list">
              <span>Task List</span>
            </NavLink>
          </li>
          <li>
            <ul className="b-sidebar__nav-menu__node-list__child-node">
              <span>
                Vehicle Information
              </span>
              <li className="d-block">
                <NavLink to="/">
                  <span>Vehicle List</span>
                </NavLink>
              </li>
              <li className="d-block">
                <NavLink to="/">
                  <span>Vehicle Map</span>
                </NavLink>
              </li>
              <li className="d-block">
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
