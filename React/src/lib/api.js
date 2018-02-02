const apiCalls = {
  fetchNews,
  registerUser
}
// TODO: Separate this into separate files
export function fetchNews(){
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  return fetch('/news', requestOptions).then(handleResponse);
}

export function registerUser(user) {
  const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(user)
   };

   return fetch('/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response){
  if(!response.ok){
    return Promise.reject(response.statusText);
  }
  return response.json();
}
export default apiCalls;
