import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Card, Icon } from "@mui/material";
import MDTypography from "components/MDTypography";
import { dropdownData } from "./data/dropdownData";

function QuickLeadEntry() {
 

  const [state, setState] = useState({
    campaign: "",
    location: "",
    name: "",
    mobileNo: "",
    leadNature: "",
    leadSource: "",
    leadSubSource: "",
    productName: "",
    testRide: "",
    expectedPeriodOfPurchase: "",
    leadFollowupStatus: "",
    nextFollowupDate: "",
    executive: "",
    state: "",
    city: "",
    remark: "",
    leadType: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log(state, "QuickLeadEntry");

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
              Quick Lead Entry
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <Form>
              <div className="row row-cols-4 px-4">
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">Campaign</Form.Label>
                  <Form.Select
                    name="campaign"
                    onChange={handleChange}
                    value={state.campaign}
                    aria-label="Default select example"
                  >
                    <option>~Select Campaign~</option>
                    {dropdownData.campaignDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
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
                  <Form.Label className="formLabel">
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Mobile No. <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="mobileNo"
                    onChange={handleChange}
                    value={state.mobileNo}
                    type="text"
                    placeholder="Enter Mobile"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Lead Nature <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="leadNature"
                    onChange={handleChange}
                    value={state.leadNature}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Nature ...</option>
                    {dropdownData.leadNatureDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Lead Source <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="leadSource"
                    onChange={handleChange}
                    value={state.leadSource}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Source ...</option>
                    {dropdownData.leadSourceDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">Lead Sub Source</Form.Label>
                  <Form.Select
                    name="leadSubSource"
                    onChange={handleChange}
                    value={state.leadSubSource}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Sub Source ...</option>
                    {dropdownData.leadSubSourceDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Product Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="productName"
                    onChange={handleChange}
                    value={state.productName}
                    aria-label="Default select example"
                  >
                    <option>... Choose Product Name ...</option>
                    {dropdownData.productDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Test Ride <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="testRide"
                    onChange={handleChange}
                    value={state.testRide}
                    aria-label="Default select example"
                  >
                    <option>... Please Select Ride ...</option>
                    {dropdownData.testRideDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Expected Period of Purchase <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="expectedPeriodOfPurchase"
                    onChange={handleChange}
                    value={state.expectedPeriodOfPurchase}
                    aria-label="Default select example"
                  >
                    <option>... Please Select ...</option>
                    {dropdownData.expectedPeriodOfPurchaseDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Lead Followup Status <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="leadFollowupStatus"
                    onChange={handleChange}
                    value={state.leadFollowupStatus}
                    aria-label="Default select example"
                  >
                    <option>~Select Status~</option>
                    {dropdownData.leadFollowupStatusDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    Next Followup Date <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="nextFollowupDate"
                    value={state.nextFollowupDate}
                    onChange={handleChange}
                    type="date"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">Executive</Form.Label>
                  <Form.Select
                    name="executive"
                    onChange={handleChange}
                    value={state.executive}
                    aria-label="Default select example"
                  >
                    <option>~Choose Executive~</option>
                    {dropdownData.executiveDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    State <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="state"
                    onChange={handleChange}
                    value={state.state}
                    aria-label="Default select example"
                  >
                    <option>DELHI</option>
                    {dropdownData.stateDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">
                    City <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="city"
                    onChange={handleChange}
                    value={state.city}
                    aria-label="Default select example"
                  >
                    <option>New Delhi</option>
                    {dropdownData.stateDropdown.map((item) => {
                      return <option value={item.value}>{item.data}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">Remark</Form.Label>
                  <Form.Control
                    name="remark"
                    value={state.remark}
                    onChange={handleChange}
                    type="text"
                  />
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
                    })}
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
                <Button
                  className="col-sm-1 ms-20 me-2 text-white"
                  variant="contained"
                  color="secondary"
                >
                  <Icon className="mx-1">close</Icon>
                  Cancel
                </Button>
              </div>
            </Form>
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default QuickLeadEntry;
