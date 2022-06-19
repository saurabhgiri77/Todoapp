import axios from "axios";

async function getStudents() {
  const response = await axios.get("https://randomuser.me/api/?results=5");
  return response.data;
}

export default getStudents;
