import axios from "axios";

const baseUrl = "http://localhost:9000";

export const $api = axios.create({
  baseUrl: baseUrl,
  headers: {
    Authorization: "",
  },
});
