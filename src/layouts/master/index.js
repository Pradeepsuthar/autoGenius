/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import { Collapse, List, ListItem, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";

function Master() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>Master</p>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AbcIcon />
        </ListItemIcon>
        <ListItemText primary="Technical Analysis" />
        {open ? <AbcIcon /> : <AbcIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </List>
      </Collapse>
      <Footer />
    </DashboardLayout>
  );
}

export default Master;
