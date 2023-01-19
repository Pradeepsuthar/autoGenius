import React from "react";
import SidebarItem from "./SidebarItem";
import "./style.css";
import items from "./data/sidebar.json";
// { color, brand, brandName, routes, onMouseEnter, onMouseLeave }
const SideNav2 = () => {
  return (
    <div className="main">
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <i className="bi-info-circle-fill" />
            <h1>Auto Genius</h1>
          </div>
          <div className="sidebar-buttons">
            {items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav2;
