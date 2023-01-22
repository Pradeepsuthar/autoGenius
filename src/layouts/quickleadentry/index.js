import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useState } from "react";
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
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Card className="px-4 pt-3 pb-5">
          <MDBox
            py={3}
            px={2}
            variant="gradient"
            className="bgBlue"
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
                  <Form.Label className="formLabel">Name</Form.Label>
                  <Form.Control
                    className="required-bullet"
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
                    className="required-bullet"
                    name="mobileNo"
                    onChange={handleChange}
                    value={state.mobileNo}
                    type="text"
                    placeholder="Enter Mobile"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">Lead Nature</Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Lead Source </Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Product Name</Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Test Ride</Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Expected Period of Purchase </Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Lead Followup Status </Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                  <Form.Label className="formLabel">Next Followup Date </Form.Label>
                  <Form.Control
                    className="required-bullet"
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
                  <Form.Label className="formLabel">State </Form.Label>
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
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formLabel">City </Form.Label>
                  <Form.Select
                    className="required-bullet"
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
                <Button className="col-sm-1 ms-20 me-2 btn-theme" variant="contained">
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
