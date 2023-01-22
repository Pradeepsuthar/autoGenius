import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { AppBar, Button, Grid, Icon, Switch, Tab, Tabs } from "@mui/material";
import MDTypography from "components/MDTypography";

import "./style.css";
import { getExecutive } from "api";
import { dropdownData } from "./data/dropDownData";

function Leads() {
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

  const contactInfo = (
    <Form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 formContainer">
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Enquiry Date</Form.Label>
          <Form.Control
            name="enquiryDate"
            value={state.enquiryDate}
            onChange={handleChange}
            type="date"
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
            <option>Showroom</option>
            {dropdownData.locationDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Product Name</Form.Label>
          <Form.Select
            className="required-bullet"
            name="productNameVehicle"
            onChange={handleChange}
          >
            <option>Digvijay Singh</option>
            {dropdownData.productNameVehicleDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Source</Form.Label>
          <Form.Select
            name="source"
            onChange={handleChange}
            value={state.source}
            aria-label="Default select example"
          >
            <option>Walk In</option>
            {dropdownData.sourceDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Sub Source</Form.Label>
          <Form.Select
            name="subSource"
            onChange={handleChange}
            value={state.subSource}
            disabled
            aria-label="Default select example"
          >
            <option>{"<Choose Source>"}</option>
            {dropdownData.subSourceDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Campaign</Form.Label>
          <Form.Select
            name="campaign"
            onChange={handleChange}
            value={state.campaign}
            disabled
            aria-label="Default select example"
          >
            <option>~Select Campaign~</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            {dropdownData.leadTypeDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Name</Form.Label>
          <Form.Control
            className="required-bullet"
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Mobile No.</Form.Label>
          <Form.Control
            className="required-bullet"
            name="mobileNo"
            onChange={handleChange}
            value={state.mobileNo}
            type="text"
            placeholder="Enter Mobile"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Whatsapp Phone</Form.Label>
          <Form.Control
            name="whatsappNo"
            onChange={handleChange}
            value={state.whatsappNo}
            type="text"
            placeholder="Enter Number"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Customer Type</Form.Label>
          <Form.Select
            name="customerType"
            onChange={handleChange}
            value={state.customerType}
            aria-label="Default select example"
          >
            <option>Individual</option>
            {dropdownData.customerTypeDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Occupation</Form.Label>
          <Form.Select
            className="required-bullet"
            name="occupation"
            onChange={handleChange}
            value={state.occupation}
            aria-label="Default select example"
          >
            <option>Businesses</option>
            {dropdownData.occupationDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Address</Form.Label>
          <Form.Control
            className="required-bullet"
            name="address"
            onChange={handleChange}
            value={state.address}
            type="text"
            placeholder="Enter Address"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">State</Form.Label>
          <Form.Select
            className="required-bullet"
            name="state"
            onChange={handleChange}
            value={state.state}
            aria-label="Default select example"
          >
            <option>DELHI</option>
            {dropdownData.stateDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.city}>
            City{" "}
          </Form.Label>
          <Form.Select
            className="required-bullet"
            name="city"
            onChange={handleChange}
            aria-label="Default select example"
          >
            <option>Deoil (south )</option>
            {dropdownData.cityDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.cityArea}>
            City Area
          </Form.Label>
          <Form.Select name="cityArea" onChange={handleChange} aria-label="Default select example">
            <option>~Select CityArea~</option>
            {dropdownData.cityAreaDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.pincode}>
            Pincode
          </Form.Label>
          <Form.Control
            className="required-bullet"
            name="pincode"
            onChange={handleChange}
            type="text"
            placeholder="Enter Pincode"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Buying For</Form.Label>
          <Form.Select
            name="buyingFor"
            onChange={handleChange}
            value={state.buyingFor}
            aria-label="Default select example"
          >
            <option>Brother</option>
            {dropdownData.buyingForDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            value={state.email}
            type="text"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Followup Status</Form.Label>
          <Form.Select
            name="leadFollowupStatus"
            onChange={handleChange}
            value={state.leadFollowupStatus}
            aria-label="Default select example"
          >
            <option>~Select Status~</option>
            {dropdownData.leadFollowupStatusDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
      </div>

      {commonFormButtons}
    </Form>
  );

  const otherInfo = (
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

  const vehicleInfo = (
    <Form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 formContainer">
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Product Name</Form.Label>
          <Form.Select
            name="productName"
            onChange={handleChange}
            value={state.productName}
            aria-label="Default select example"
          >
            <option>Digvijay Singh</option>
            {dropdownData.productNameDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Model Description</Form.Label>
          <Form.Select
            name="modelDescription"
            onChange={handleChange}
            value={state.modelDescription}
            aria-label="Default select example"
          >
            <option>Walk In</option>
            {dropdownData.modelDescriptionDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Color</Form.Label>
          <Form.Select
            name="color"
            onChange={handleChange}
            value={state.color}
            disabled
            aria-label="Default select example"
          >
            <option>{"<select color>"}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Varient</Form.Label>
          <Form.Select
            name="varient"
            onChange={handleChange}
            value={state.varient}
            disabled
            aria-label="Default select example"
          >
            <option>~Select~</option>
            {dropdownData.varientDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Price On</Form.Label>
          <Form.Select
            name="priceOn"
            onChange={handleChange}
            value={state.priceOn}
            aria-label="Default select example"
          >
            <option>onRoad</option>
            {dropdownData.priceOnDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">On Road Price</Form.Label>
          <Form.Select
            className="required-bullet"
            name="onRoadPrice"
            onChange={handleChange}
            value={state.onRoadPrice}
            aria-label="Default select example"
          >
            <option>100</option>
            {dropdownData.onRoadPriceDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Brand Name</Form.Label>
          <Form.Select
            name="brandName"
            onChange={handleChange}
            value={state.brandName}
            aria-label="Default select example"
          >
            <option>~Select~</option>
            {dropdownData.brandNameDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Present Product</Form.Label>
          <Form.Select
            name="presentProduct"
            onChange={handleChange}
            value={state.presentProduct}
            aria-label="Default select example"
          >
            <option></option>
            {dropdownData.presentProductDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Mobile No.</Form.Label>
          <Form.Control
            name="mobileNo"
            onChange={handleChange}
            value={state.mobileNo}
            type="text"
            placeholder="Enter Mobile"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Reg No</Form.Label>
          <Form.Control name="regNo" onChange={handleChange} value={state.regNo} type="text" />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">MFG Year</Form.Label>
          <Form.Control name="mfgYear" onChange={handleChange} value={state.mfgYear} type="text" />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Test Ride</Form.Label>
          <Form.Select
            name="customerType"
            onChange={handleChange}
            value={state.customerType}
            aria-label="Default select example"
          >
            {dropdownData.customerTypeDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Expt. Cost</Form.Label>
          <Form.Control
            name="exptCost"
            onChange={handleChange}
            value={state.exptCost}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Eval. Cost</Form.Label>
          <Form.Control
            name="evalCost"
            onChange={handleChange}
            value={state.evalCost}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">On Cash</Form.Label>
          <Form.Select
            className="required-bullet"
            name="onCash"
            onChange={handleChange}
            value={state.onCash}
            aria-label="Default select example"
          >
            {dropdownData.onCashDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
      </div>
      <div className="row mx-4 my-3">
        <Button onClick={addHandler} className="col-sm-1 ms-20 me-2 btn-theme" variant="contained">
          <Icon>add</Icon>
          Add
        </Button>
      </div>

      <div className="grpTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>

              <th scope="col">Model Description</th>
              <th scope="col">Color</th>
              <th scope="col">Varient</th>
              <th scope="col">Price On</th>
              <th scope="col">On Road Price</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Present Product</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Reg No</th>
              <th scope="col">MFG Year</th>
              <th scope="col">Test Ride</th>
              <th scope="col">Expt Cost</th>
              <th scope="col">Eval. Cost</th>
              <th scope="col">On Cash</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <tr>
                  <td>{data.productNameVehicle}</td>
                  <td>{data.modelDescription}</td>
                  <td>{data.color}</td>
                  <td>{data.varient}</td>
                  <td>{data.priceOn}</td>
                  <td>{data.onRoadPrice}</td>
                  <td>{data.brandName}</td>
                  <td>{data.presentProduct}</td>
                  <td>{data.mobileNumber}</td>
                  <td>{data.regNo}</td>
                  <td>{data.mfgYear}</td>
                  <td>{data.testRide}</td>
                  <td>{data.exptCost}</td>
                  <td>{data.evalCost}</td>
                  <td>{data.onCash}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {commonFormButtons}
    </Form>
  );

  const appointmentInfo = (
    <Form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 formContainer">
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Nature</Form.Label>
          <Form.Select
            className="required-bullet"
            name="customerType"
            onChange={handleChange}
            value={state.leadNature}
            aria-label="Default select example"
          >
            <option>{"<Choost Nature>"}</option>
            {dropdownData.leadNatureDropdown.map((item) => {
              return <option value={item.value}>{item.data}</option>;
            })}{" "}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Followup Place</Form.Label>
          <Form.Control
            name="followUpPlace"
            onChange={handleChange}
            value={state.followUpPlace}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Followup Date</Form.Label>
          <Form.Control
            className="required-bullet"
            name="followUpDate"
            onChange={handleChange}
            value={state.followUpDate}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Time</Form.Label>
          <Form.Control name="time" onChange={handleChange} value={state.time} type="time" />
        </Form.Group>
      </div>
      {commonFormButtons}
    </Form>
  );

  function SetForm() {
    if (tabValue === 0) {
      return <>{contactInfo}</>;
    }

    if (tabValue === 1) {
      return <>{otherInfo}</>;
    }

    if (tabValue === 2) {
      return <>{appointmentInfo}</>;
    }
    if (tabValue === 3) {
      return <>{vehicleInfo}</>;
    }
  }

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
              Lead Entry
            </MDTypography>
          </MDBox>

          <div className="mx-3 mt-4">
            <Grid item>
              <AppBar position="static" className="tabs">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                  <Tab
                    className="tab"
                    label="Contact Information [ Customer ]"
                    icon={<i className="bi bi-info-circle-fill mx-2 my-0"></i>}
                  />
                  <Tab
                    className="tab"
                    label="Other Info"
                    icon={<i className="bi bi-plus-square-fill mx-2 my-0"></i>}
                  />
                  <Tab
                    className="tab"
                    label="Appointment Information"
                    icon={<i className="bi bi-info-calendar-fill mx-2 my-0"></i>}
                  />
                  <Tab
                    className="tab"
                    label="Vehicle Info"
                    icon={<i className="bi bi-car-front mx-2 my-0"></i>}
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </div>

          <MDBox pt={2}>
            <SetForm />
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default Leads;
