import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import "./App.css";
import { useMaterialUIController } from "context";
import SideNav2 from "examples/Sidenav2";
import Leads from "layouts/leads";
import Dashboard from "layouts/dashboard";
import QuickLeadEntry from "layouts/quickleadentry";
import Basic from "layouts/authentication/sign-in";
import Cover from "layouts/authentication/sign-up";
import MangeLeadEntry from "layouts/manage-lead-entry";

export default function App() {
  const [controller] = useMaterialUIController();
  const { direction, darkMode } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

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
            <Route exact path="/" element={<Navigate to="/login" />} />
            <Route exact path="/signup" element={<Cover />} />
            <Route exact path="/login" element={<Basic />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/leads" element={<Leads />} />
            <Route exact path="/manageleadentries" element={<MangeLeadEntry />} />
            <Route exact path="/quickleadentry" element={<QuickLeadEntry />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
