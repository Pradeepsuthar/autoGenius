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
import { Card, Grid, MenuItem } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDSelect from "components/MDSelect";

function Leads() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
                  Lead Entry
                </MDTypography>
              </MDBox>

              <MDBox pt={3}>
                <Grid container justifyContent="center">
                  <Grid item mx={2} my={2}>
                    <MDSelect>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </MDSelect>
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Location" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Executive" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Source" />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Enquiry Date" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Location" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Executive" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Source" />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Enquiry Date" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Location" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Executive" />
                  </Grid>
                  <Grid item mx={2} my={2}>
                    <MDInput type="text" label="Source" />
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Leads;
