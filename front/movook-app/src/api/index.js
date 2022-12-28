import axios from "axios";
import { refresh, refreshErrorHandle } from "../lib/refresh";

const api = axios.create({
  baseURL: "http://54.180.46.120",
  header: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(refresh, refreshErrorHandle);

export const userApi = {
  join: (user) => api.post("/join", user),
  login: (user) => api.post("/login", user),
  findPassword: (user) => api.post("/pw/search/email", user),
};
