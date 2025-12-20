import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const saveWorkflow = (data) => API.post("/workflow", data);
export const uploadFile = (file) => {
  const form = new FormData();
  form.append("file", file);
  return API.post("/upload", form);
};
export const chat = (question) =>
  API.post("/chat", null, { params: { question } });

export default API;
