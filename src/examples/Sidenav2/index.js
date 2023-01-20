import React from "react";
import SidebarItem from "./SidebarItem";
import "./style.css";
import Logo from "../../assets/images/logos/logo-large.png";
import items from "./data/sidebar.json";
// { color, brand, brandName, routes, onMouseEnter, onMouseLeave }
function SideNav2() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          {/* <h1 className="mx-2">Auto Genius</h1> */}
          <h1 className="mx-2">
            <img src={Logo} width="120px" />
          </h1>
        </div>
        <div className="sidebar-buttons">
          {items && items.map((item) => <SidebarItem item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default SideNav2;
