import axios from "axios";
const baseUrl = "https://aaiina.app/api/";
const token = "829416af2aac42568f2ca872fd172bd9";

export async function getExecutive() {
  try {
    const data = await axios.get(baseUrl + "React/GetExecutive", {
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
