import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { AppBar, Button, Grid, Icon, Switch, Tab, Tabs } from "@mui/material";
import MDTypography from "components/MDTypography";

import "./style.css";

function Leads() {
  const [state, setState] = useState({
    enquiryDate: "",
    location: "",
    executive: "",
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
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < 576
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>Digvijay Singh</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            value={state.name}
            type="text"
            placeholder="Enter Name"
          />
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Occupation</Form.Label>
          <Form.Select
            name="occupation"
            onChange={handleChange}
            value={state.occupation}
            aria-label="Default select example"
          >
            <option>Businesses</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Address</Form.Label>
          <Form.Control
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
            name="state"
            onChange={handleChange}
            value={state.state}
            aria-label="Default select example"
          >
            <option>DELHI</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.city}>
            City
          </Form.Label>
          <Form.Select name="city" onChange={handleChange} aria-label="Default select example">
            <option>Deoil (south )</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.cityArea}>
            City Area
          </Form.Label>
          <Form.Select name="cityArea" onChange={handleChange} aria-label="Default select example">
            <option>~Select CityArea~</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel" value={state.pincode}>
            Pincode
          </Form.Label>
          <Form.Control
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className="row mx-4 mt-3">
        <Button
          className="col-sm-1 ms-20 me-2 text-color-for-button text-white"
          variant="contained"
          color="primary"
        >
          <Icon className="mx-1">save</Icon>
          Save
        </Button>
        <Button className="col-sm-1 ms-20 me-2 text-white" variant="contained" color="secondary">
          <Icon className="mx-1">close</Icon>
          Cancel
        </Button>
      </div>
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
            name="customerType"
            onChange={handleChange}
            value={state.customerType}
            aria-label="Default select example"
          >
            <option>With in a week</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className="row mx-4 mt-3">
        <Button
          className="col-sm-1 ms-20 me-2 text-color-for-button text-white"
          variant="contained"
          color="primary"
        >
          <Icon className="mx-1">save</Icon>
          Save
        </Button>
        <Button className="col-sm-1 ms-20 me-2 text-white" variant="contained" color="secondary">
          <Icon className="mx-1">close</Icon>
          Cancel
        </Button>
      </div>
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
            <option>ACCENT</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>Digvijay Singh</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">On Road Price</Form.Label>
          <Form.Select
            name="onRoadPrice"
            onChange={handleChange}
            value={state.onRoadPrice}
            aria-label="Default select example"
          >
            <option>100</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option value="1">Yes</option>
            <option value="2">No</option>
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
            name="onCash"
            onChange={handleChange}
            value={state.onCash}
            aria-label="Default select example"
          >
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Form.Select>
        </Form.Group>
      </div>

      <div className="row mx-4 mt-3">
        <Button
          className="col-sm-1 ms-20 me-2 text-color-for-button text-white"
          variant="contained"
          color="primary"
        >
          <Icon className="mx-1">save</Icon>
          Save
        </Button>
        <Button className="col-sm-1 ms-20 me-2 text-white" variant="contained" color="secondary">
          <Icon className="mx-1">close</Icon>
          Cancel
        </Button>
      </div>
    </Form>
  );

  const appointmentInfo = (
    <Form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 formContainer">
        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
          <Form.Label className="formLabel">Lead Nature</Form.Label>
          <Form.Select
            name="customerType"
            onChange={handleChange}
            value={state.leadNature}
            aria-label="Default select example"
          >
            <option>{"<Choost Nature>"}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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

      <div className="row mx-4 mt-3">
        <Button
          className="col-sm-1 ms-20 me-2 text-color-for-button text-white"
          variant="contained"
          color="primary"
        >
          <Icon className="mx-1">save</Icon>
          Save
        </Button>
        <Button className="col-sm-1 ms-20 me-2 text-white" variant="contained" color="secondary">
          <Icon className="mx-1">close</Icon>
          Cancel
        </Button>
      </div>
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
            bgColor="dark"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Lead Entry
            </MDTypography>
          </MDBox>

          <div className="mx-3 mt-4">
            <Grid item>
              <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                  <Tab
                    label="Contact Information [ Customer ]"
                    icon={<i className="bi bi-info-circle-fill mx-2 my-0"></i>}
                  />
                  <Tab
                    label="Other Info"
                    icon={<i className="bi bi-plus-square-fill mx-2 my-0"></i>}
                  />
                  <Tab
                    label="Appointment Information"
                    icon={<i className="bi bi-info-calendar-fill mx-2 my-0"></i>}
                  />
                  <Tab label="Vehicle Info" icon={<i className="bi bi-car-front mx-2 my-0"></i>} />
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
