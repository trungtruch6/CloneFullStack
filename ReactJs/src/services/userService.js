import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login");
};

export { handleLoginAPI };
