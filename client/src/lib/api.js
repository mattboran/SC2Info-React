const apiCalls = {
    fetchNews,
    registerUser,
    loginUser,
    checkReturningUser,
    logoutUser,
    searchForPlayer,
}

export function searchForPlayer(player, region){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({player, region})
    };
    return fetch('/api/players/search', requestOptions).then(handleResponse);
}

export function searchPlayerDetail(player, region){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({player, region})
    };
    return fetch('/api/players/searchDetail', requestOptions).then(handleResponse);
}

// TODO: Separate this into separate files
export function fetchNews(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
    };

    return fetch('/api/news', requestOptions).then(handleResponse);
}

// USER API CALLS
export function registerUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' } ,
        credentials: 'same-origin',
        body: JSON.stringify(user)

    };
    return fetch('/api/users/register', requestOptions).then(handleResponse);
}

export function loginUser(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(user)

    };
    return fetch('/api/users/signin', requestOptions).then(handleResponse);
}

export function checkReturningUser() {
    const requestOptions = {
        method: 'POST',
        credentials: 'same-origin',
    }
    return fetch('/api/users/pre-signin',requestOptions).then(handleResponse);
}

export function logoutUser() {
    const requestOptions = {
        method: 'POST',
        credentials: 'same-origin',
    }
    return fetch('/api/users/logout', requestOptions).then(handleResponse);
}

function handleResponse(response){
    if(!response.ok){
        return response.json({err:'err'}).then(Promise.reject.bind(Promise));
    }
    if (!response.body) {
        return response;
    }
    return response.json();
}

export default apiCalls;
