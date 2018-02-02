import axios from 'axios';

const apiCalls = {
  fetchNews,
  registerUser
}

const AXIOS_CONFIG = {
  proxy: {
    host: '127.0.0.1',
    port: 3001
  }
}

// TODO: Separate this into separate files
export function fetchNews(){
  const url = `/api/news`;

  console.log("Making an api call to fetchNews.");
  return axios.get(url, AXIOS_CONFIG)
    .then(response => response.data)
    .catch(error => error.data);
}

export function registerWithoutAxios(user) {
  const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(user)
   };

   return fetch('/users/register', requestOptions).then(handleResponse);
}

export function registerUser(user) {
  const url=`/api/user/register`;
  const { username, email, password } = user;

  const request = axios({
    method: 'POST',
    url,
    headers: []
  });

  console.log("Making an api call to registerUser!");
  axios.post(url,{
      'username': username,
      'email': email,
      'password': password
    },
     AXIOS_CONFIG).then(handleResponse);
}

function handleResponse(response){
  if(!response.ok){
    return Promise.reject(response.statusText);
  }
  return response.json();
}
export default apiCalls;
