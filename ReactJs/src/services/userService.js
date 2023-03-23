import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (inputID) => {
  return axios.get(`/api/get-all-users?id=${inputID}`);
};
export { handleLoginAPI, getAllUsers };
