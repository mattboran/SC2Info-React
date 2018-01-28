import axios from 'axios';

const apiCalls = {
  fetchNews
}
const BASE_URL = "http://localhost:3001";
export function fetchNews(){
  const url = `/api/news`;
  const config = { proxy: { host:'127.0.0.1', port:3001} };
  console.log("Making an api call to fetchNews.");
  return axios.get(url, config).then(response => response.data);
}

export default apiCalls;
