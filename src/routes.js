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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Billing from "layouts/billing";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Master from "layouts/master";
import Leads from "layouts/leads";
import Entry from "layouts/entry";
import Reports from "layouts/reports";
import Registers from "layouts/registers";
import AnalyticalReports from "layouts/analyticalreports";
import Subscription from "layouts/subscription";
import Reminders from "layouts/reminders";
import Utility from "layouts/utility";
import Erp from "layouts/erp";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Master",
    key: "master",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/master",
    component: <Master />,
  },
  {
    type: "collapse",
    name: "Leads",
    key: "leads",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/leads",
    component: <Leads />,
  },
  {
    type: "collapse",
    name: "Entry",
    key: "entry",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/entry",
    component: <Entry />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/reports",
    component: <Reports />,
  },
  {
    type: "collapse",
    name: "Registers",
    key: "registers",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/registers",
    component: <Registers />,
  },
  {
    type: "collapse",
    name: "Analytical Reports",
    key: "analytical_reports",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/analytical_reports",
    component: <AnalyticalReports />,
  },
  {
    type: "collapse",
    name: "Subscription",
    key: "subscription",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/subscription",
    component: <Subscription />,
  },
  {
    type: "collapse",
    name: "Reminders",
    key: "reminders",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/reminders",
    component: <Reminders />,
  },
  {
    type: "collapse",
    name: "Utility",
    key: "utility",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/utility",
    component: <Utility />,
  },
  {
    type: "collapse",
    name: "ERP",
    key: "erp",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/erp",
    component: <Erp />,
  },
];

export default routes;
