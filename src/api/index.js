import axios from "axios";
const baseUrl = "https://";
const token = "";
export async function getExecutive() {
  try {
    const data = await axios.get(baseUrl + "GetExecutive", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
    return data;
  } catch (e) {}
}
