import axios from "axios";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const fetchApi = axios.create({
  baseURL: `${proxyurl}https://jobs.github.com`,
});
