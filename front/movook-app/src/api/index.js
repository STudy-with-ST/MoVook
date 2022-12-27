import axios from "axios";

const api = axios.create({
  baseURL: "http://54.180.46.120",
  header: {
    "Content-Type": "application/json",
  },
});

export const userApi = {
  join: (user) => api.post("/join", user),
  login: (user) => api.post("/login", user),
};
