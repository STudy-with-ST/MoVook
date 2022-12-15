import axios from "axios";

const api = axios.create({
  baseURL: "",
  header: {
    "Content-Type": "application/json",
  },
});
