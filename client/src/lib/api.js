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

  return fetch('/api/news', requestOptions).then(handleResponse);
}

export function registerUser(user) {
  console.log("User in registerUser: ", JSON.stringify(user));
  const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type' : 'application/json' } ,
       body: JSON.stringify(user)
   };
   return fetch('/api/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response){
  if(!response.ok){
    return response.json().then(Promise.reject.bind(Promise));
  }
  return response.json();
}

export default apiCalls;
