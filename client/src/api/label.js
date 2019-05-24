import axios from "axios";

const getLabelList = () => {
  return axios.get("/api/label/list");
};
const addLabel = param => {
  return axios.post("/api/label/add", param);
};
const deleteLabel = param => {
  return axios.post("/api/label/delete", param);
};
const updateLabelName = param => {
  return axios.post("/api/label/updateName", param);
};
const updateLabelStatus = param => {
  return axios.post("/api/label/updateStatus", param);
};

export {
  getLabelList,
  addLabel,
  deleteLabel,
  updateLabelName,
  updateLabelStatus
};
