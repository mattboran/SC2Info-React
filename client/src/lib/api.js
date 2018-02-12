const apiCalls = {
  fetchNews,
  registerUser
}
// TODO: Separate this into separate files
export function fetchNews(){
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'same-origin',
    credentials: 'include'
  };

  return fetch('/api/news', requestOptions).then(handleResponse);
}

export function registerUser(user) {
  const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type' : 'application/json' } ,
       body: JSON.stringify(user)
   };
   return fetch('/api/users/register', requestOptions).then(handleResponse);
}

export function loginUser(user){
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(user)
  };
  return fetch('/api/users/signin', requestOptions).then(handleResponse);
}

function handleResponse(response){
  if(!response.ok){
    return response.json({err:'err'}).then(Promise.reject.bind(Promise));
  }
  return response.json();
}

export default apiCalls;
