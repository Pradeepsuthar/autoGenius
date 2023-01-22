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

function MangeLeadEntry() {
  const [executiveData, setExecutiveData] = useState();
  useEffect(() => {
    setExecutiveData(getExecutive());
    console.log(executiveData, "Executive Data");
  }, []);

  const [tableData, setTableData] = useState([]);

  const addHandler = () => {
    let initalData = tableData;
    initalData.push(state);
    setTableData(initalData);
    console.log(initalData, "initial data");
  };

  const [state, setState] = useState({
    enquiryDate: "",
    location: "",
    source: "",
    subSource: "",
    campaign: "",
    leadType: "",
    name: "",
    mobileNo: "",
    whatsappNo: "",
    customerType: "",
    occupation: "",
    address: "",
    state: "",
    city: "",
    cityArea: "",
    pincode: "",
    buyingFor: "",
    email: "",
    leadFollowupStatus: "",
    meeting: "",
    noOfPeople: "",
    remarks: "",
    expectedPeriodOfPurchase: "",
    leadNature: "",
    followUpPlace: "",
    followUpDate: "",
    time: "",
    productName: "",
    productNameVehicle: "",
    modelDescription: "",
    color: "",
    varient: "",
    priceOn: "",
    onRoadPrice: "",
    brandName: "",
    presentProduct: "",
    regNo: "",
    mfgYear: "",
    testRide: "",
    exptCost: "",
    evalCost: "",
    onCash: "",
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
          <Form.Label className="formLabel">Meeting</Form.Label> <br />
          <Switch />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">No. of People</Form.Label>
          <Form.Control
            name="noOfPeople"
            onChange={handleChange}
            value={state.noOfPeople}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Remarks</Form.Label>
          <Form.Control name="remarks" onChange={handleChange} value={state.remarks} type="text" />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">The expected period of Purchase</Form.Label>
          <Form.Select
            className="required-bullet"
            name="customerType"
            onChange={handleChange}
            value={state.customerType}
            aria-label="Default select example"
          >
            <option>With in a week</option>
            {dropdownData.expectedPeriodOfPurchaseDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
      </div>

      {commonFormButtons}
    </Form>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
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
