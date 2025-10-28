import axios from "axios";

const API_URL = "http://localhost:5000/api/analyze";

export const getAnalysis = async (username) => {
  const res = await axios.get(`${API_URL}/${username}`);
  return res.data;
};
