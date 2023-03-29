import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (inputID) => {
  return axios.get(`/api/get-all-users?id=${inputID}`);
};
const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
const editUserService = (data) => {
  return axios.put("/api/edit-user", data);
};
const deleteUserService = (data) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: data,
    },
  });
};
export {
  handleLoginAPI,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
};
