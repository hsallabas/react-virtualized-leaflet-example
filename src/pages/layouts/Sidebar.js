import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="b-sidebar">
      <div className="nav-menu">
        <ul>
          <li>
            <NavLink to="/" className="nav-menu-link">
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/task-list" className="nav-menu-link">
              <span>Task List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/task-map" className="nav-menu-link">
              <span>Task Map</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
