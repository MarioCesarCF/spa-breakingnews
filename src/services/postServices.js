import axios from "axios";

const baseURL = "https://api-breakingnews-etps.onrender.com";

export function getAllPosts() {
  const response = axios.get(`${baseURL}/news`);
  return response;
}