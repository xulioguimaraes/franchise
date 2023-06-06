import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:10101/v2",
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export { api };
