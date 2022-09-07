import axios from "axios";

export const baseURL = "http://localhost:9000";

export const $api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "",
  },
});
