import axios from 'axios';

const apiCalls = {
  fetchNews
}

const PROXY_INFO = {
  host: '127.0.0.1',
  port: 3001
}

const AXIOS_CONFIG = {
  PROXY_INFO
}

// TODO: Separate this into separate files
export function fetchNews(){
  const url = `/api/news`;

  console.log("Making an api call to fetchNews.");
  return axios.get(url, AXIOS_CONFIG)
    .then(response => response.data)
    .catch(error => {
      console.log("Error in api call = "+error);
    });
}

export function registerUser(username, email, password) {
  const url=`/api/user/register`;

  console.log("Making an api call to registerUser!");
  return axios.post(url,{
      'username': username,
      'email': email,
      'password': password
    },
     AXIOS_CONFIG)
    .then(response => response.data)
    .catch(error => {
      console.log("Error in register API call = "+error);
    })
}

export default apiCalls;
