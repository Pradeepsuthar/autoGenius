/**
=========================================================
* Auto Genius React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

// react-router components
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Auto Genius React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

import "./App.css";

import { useMaterialUIController } from "context";
import SideNav2 from "examples/Sidenav2";
import Leads from "layouts/leads";
import Dashboard from "layouts/dashboard";
import QuickLeadEntry from "layouts/quickleadentry";

export default function App() {
  const [controller] = useMaterialUIController();
  const { direction, darkMode } = controller;
  const { pathname } = useLocation();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <div className="dFlex">
        <SideNav2 />
        <div className="mainBody">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/leads" element={<Leads />} />
            <Route exact path="/quickleadentry" element={<QuickLeadEntry />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
