import axios from "axios";
const baseUrl = "https://app.applewoodsolutions.in/api/";
const token = "829416af2aac42568f2ca872fd172bd9";

// Get Executive
export async function getExecutive() {
  try {
    const data = await axios.get(baseUrl + "Master/GetExecutive", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Get Locations
export async function GetLocations() {
  try {
    const data = await axios.get(baseUrl + "Master/GetLocations", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Get Source
export async function GetSource() {
  try {
    const data = await axios.get(baseUrl + "Master/GetSource", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Get Lead Type
export async function GetLeadtype() {
  try {
    const data = await axios.get(baseUrl + "Master/GetLeadtype", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
