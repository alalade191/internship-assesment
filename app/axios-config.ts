import axios from "axios";

export const userData = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
