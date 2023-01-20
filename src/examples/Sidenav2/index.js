import React from "react";
import SidebarItem from "./SidebarItem";
import "./style.css";
import items from "./data/sidebar.json";
// { color, brand, brandName, routes, onMouseEnter, onMouseLeave }
const SideNav2 = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="mx-2">Auto Genius</h1>
        </div>
        <div className="sidebar-buttons">
          {items.map((item, index) => (
            <SidebarItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav2;
