import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { AppBar, Button, Grid, Icon, Switch, Tab, Tabs } from "@mui/material";
import MDTypography from "components/MDTypography";

import { dropdownData } from "./data/dropDownData";

import "./style.css";
import { getExecutive } from "api";
import ShortcutNavigation from "examples/shortcutNavigation";

function MangeLeadEntry() {
  const [executiveData, setExecutiveData] = useState();
  useEffect(() => {
    setExecutiveData(getExecutive());
    console.log(executiveData, "Executive Data");
  }, []);

  const [tableData, setTableData] = useState([]);

  const staticData = [
    {
      leadDate: "Date:18-01-2023 Time:10:10AM",
      executiveName: "Digvijay Singh [Lead Type]:Lead Lock",
      prospectName: "LUCKY ANJANA [Contact No. : 989898989898] [pincode:112233]",
      productName: "Model:ACCENT",
      lSorcName: "Lead Source:Walk In [Lead Nature:medium]",
      testRide: "Test Ride:No",
      nextFollowupDate: "Followup Date:20-01-2023 Time:10AM",
      billStatus: "",
    },
    {
      leadDate: "Date:18-01-2023 Time:10:10AM",
      executiveName: "Digvijay Singh [Lead Type]:Lead Lock",
      prospectName: "LUCKY ANJANA [Contact No. : 989898989898] [pincode:112233]",
      productName: "Model:ACCENT",
      lSorcName: "Lead Source:Walk In [Lead Nature:medium]",
      testRide: "Test Ride:No",
      nextFollowupDate: "Followup Date:20-01-2023 Time:10AM",
      billStatus: "",
    },
    {
      leadDate: "Date:18-01-2023 Time:10:10AM",
      executiveName: "Digvijay Singh [Lead Type]:Lead Lock",
      prospectName: "LUCKY ANJANA [Contact No. : 989898989898] [pincode:112233]",
      productName: "Model:ACCENT",
      lSorcName: "Lead Source:Walk In [Lead Nature:medium]",
      testRide: "Test Ride:No",
      nextFollowupDate: "Followup Date:20-01-2023 Time:10AM",
      billStatus: "",
    },
    {
      leadDate: "Date:18-01-2023 Time:10:10AM",
      executiveName: "Digvijay Singh [Lead Type]:Lead Lock",
      prospectName: "LUCKY ANJANA [Contact No. : 989898989898] [pincode:112233]",
      productName: "Model:ACCENT",
      lSorcName: "Lead Source:Walk In [Lead Nature:medium]",
      testRide: "Test Ride:No",
      nextFollowupDate: "Followup Date:20-01-2023 Time:10AM",
      billStatus: "",
    },
  ];

  const addHandler = () => {
    let initalData = tableData;
    initalData.push(state);
    setTableData(initalData);
    console.log(initalData, "initial data");
  };

  const [state, setState] = useState({
    dateRange: "",
    fromDate: "",
    toDate: "",
    enquiryNoNameMobileNo: "",
    executive: "",
    leadSource: "",
    leadSubSource: "",
    leadNature: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < 576
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const commonFormButtons = (
    <div className="row mx-4 mt-3 grp">
      <Button className="col-sm-1 ms-20 me-2 btn-theme" variant="contained">
        <Icon className="mx-1">save</Icon>
        Save
      </Button>
      <Button className="col-sm-1 ms-20 me-2 text-white" variant="contained" color="secondary">
        <Icon className="mx-1">close</Icon>
        Cancel
      </Button>
    </div>
  );

  const filterForm = (
    <Form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 formContainer">
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Date Range</Form.Label>
          <Form.Select
            name="dateRange"
            onChange={handleChange}
            value={state.dateRange}
            aria-label="Default select example"
          >
            <option>With in a week</option>
            {/* {dropdownData.dateRange.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">From Date</Form.Label>
          <Form.Control
            name="fromDate"
            onChange={handleChange}
            value={state.fromDate}
            type="date"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">To Date</Form.Label>
          <Form.Control name="toDate" onChange={handleChange} value={state.toDate} type="date" />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Enquiry No/Name/Mobile No</Form.Label>
          <Form.Control
            name="enquiryNoNameMobileNo"
            onChange={handleChange}
            value={state.enquiryNoNameMobileNo}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Location</Form.Label>
          <Form.Select
            name="location"
            onChange={handleChange}
            value={state.location}
            aria-label="Default select example"
          >
            <option>Select Location</option>
            {/* {dropdownData.dateRange.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Executive</Form.Label>
          <Form.Select
            name="executive"
            onChange={handleChange}
            value={state.executive}
            aria-label="Default select example"
          >
            <option>Choose Executive</option>
            {/* {dropdownData.dateRange.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Type</Form.Label>
          <Form.Select
            name="leadType"
            onChange={handleChange}
            value={state.leadType}
            aria-label="Default select example"
          >
            <option>Sale</option>
            {/* {dropdownData.leadTypeDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Source</Form.Label>
          <Form.Select
            name="leadSource"
            onChange={handleChange}
            value={state.leadSource}
            aria-label="Default select example"
          >
            <option>Walk In</option>
            {/* {dropdownData.sourceDropdown.map((item) => {
                        return <option value={item.value}>{item.data}</option>;
                      })} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Sub Source</Form.Label>
          <Form.Select
            name="leadSubSource"
            onChange={handleChange}
            value={state.leadSubSource}
            disabled
            aria-label="Default select example"
          >
            <option>{"<Choose Source>"}</option>
            {/* {dropdownData.subSourceDropdown.map((item) => {
                        return <option value={item.value}>{item.data}</option>;
                      })}{" "} */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Nature</Form.Label>
          <Form.Select
            name="leadNature"
            onChange={handleChange}
            value={state.leadNature}
            disabled
            aria-label="Default select example"
          >
            <option>{"<Choose Nature>"}</option>
            {/* {dropdownData.subSourceDropdown.map((item) => {
                        return <option value={item.value}>{item.data}</option>;
                      })}{" "} */}
          </Form.Select>
        </Form.Group>
      </div>

      <div className="grpTable my-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Lead Date</th>
              <th scope="col">Executive Name</th>
              <th scope="col">Prospect Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">LSorc Name</th>
              <th scope="col">Test Ride</th>
              <th scope="col">NextFollowup Date</th>
              <th scope="col">BillStatus</th>
            </tr>
          </thead>
          <tbody>
            {staticData.map((data) => {
              return (
                <tr>
                  <td>{data.leadDate}</td>
                  <td>{data.executiveName}</td>
                  <td>{data.prospectName}</td>
                  <td>{data.productName}</td>
                  <td>{data.lSorcName}</td>
                  <td>{data.testRide}</td>
                  <td>{data.nextFollowupDate}</td>
                  <td>{data.billStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {commonFormButtons}
    </Form>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ShortcutNavigation />
      <MDBox pt={2} pb={3}>
        <Card className="px-4 py-5">
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            borderRadius="lg"
            coloredShadow="info"
            className="bgBlue"
          >
            <MDTypography variant="h6" color="white">
              Manage Lead Entry
            </MDTypography>
          </MDBox>

          <MDBox pt={2}>{filterForm}</MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default MangeLeadEntry;
