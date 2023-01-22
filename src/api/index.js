import axios from "axios";
const baseUrl = "https://app.applewoodsolutions.in/api/";
const token = "829416af2aac42568f2ca872fd172bd9";

// Get Executive
export function getExecutive() {
  try {
    fetch("https://app.applewoodsolutions.in/api/Master/GetExecutive", {
      headers: {
        "Authorization": "Bearer 829416af2aac42568f2ca872fd172bd9",
        "Transfer-Encoding": "chunked",
        "Content-Type": "application/json",
        "X-Powered-By": "ASP.NET",
        "X-Powered-By-Plesk": "PleskWin",
      },
    }).then((data) => {
      console.log(data);
      return data;
    });
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
