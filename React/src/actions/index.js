export function requestLogin(user, pass){
  return{
    type: 'REQUEST_AUTH',
    user,
    pass
  }
}
