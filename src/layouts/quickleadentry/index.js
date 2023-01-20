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
import MDBox from "components/MDBox";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Card } from "@mui/material";
import MDTypography from "components/MDTypography";

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
        <Card className="px-4 py-4">
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Quick Lead Entry
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <Form>
              <div className="row">
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Campaign</Form.Label>
                  <Form.Select
                    name="campaign"
                    onChange={handleChange}
                    value={state.campaign}
                    aria-label="Default select example"
                  >
                    <option>~Select Campaign~</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Location</Form.Label>
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
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    name="mobileNo"
                    onChange={handleChange}
                    value={state.mobileNo}
                    type="text"
                    placeholder="Enter Mobile"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Lead Nature</Form.Label>
                  <Form.Select
                    name="leadNature"
                    onChange={handleChange}
                    value={state.leadNature}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Nature ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Lead Source</Form.Label>
                  <Form.Select
                    name="leadSource"
                    onChange={handleChange}
                    value={state.leadSource}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Source ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Lead Sub Source</Form.Label>
                  <Form.Select
                    name="leadSubSource"
                    onChange={handleChange}
                    value={state.leadSubSource}
                    aria-label="Default select example"
                  >
                    <option>... Choose Lead Sub Source ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Select
                    name="productName"
                    onChange={handleChange}
                    value={state.productName}
                    aria-label="Default select example"
                  >
                    <option>... Choose Product Name ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Test Ride</Form.Label>
                  <Form.Select
                    name="testRide"
                    onChange={handleChange}
                    value={state.testRide}
                    aria-label="Default select example"
                  >
                    <option>... Please Select Ride ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Expected Period of Purchase</Form.Label>
                  <Form.Select
                    name="expectedPeriodOfPurchase"
                    onChange={handleChange}
                    value={state.expectedPeriodOfPurchase}
                    aria-label="Default select example"
                  >
                    <option>... Please Select ...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Lead Followup Status</Form.Label>
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
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Next Followup Date</Form.Label>
                  <Form.Control
                    name="nextFollowupDate"
                    value={state.nextFollowupDate}
                    onChange={handleChange}
                    type="date"
                  />
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Executive</Form.Label>
                  <Form.Select
                    name="executive"
                    onChange={handleChange}
                    value={state.executive}
                    aria-label="Default select example"
                  >
                    <option>~Choose Executive~</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>State</Form.Label>
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
                <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    name="city"
                    onChange={handleChange}
                    value={state.city}
                    aria-label="Default select example"
                  >
                    <option>New Delhi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Remark</Form.Label>
                  <Form.Control
                    name="remark"
                    value={state.remark}
                    onChange={handleChange}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Lead Type</Form.Label>
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
              </div>
              <div className="row mx-1">
                <Button
                  className="col-sm-1 ms-20 me-2 text-color-for-button text-white"
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button
                  className="col-sm-1 ms-20 me-2 text-white"
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </MDBox>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default QuickLeadEntry;
