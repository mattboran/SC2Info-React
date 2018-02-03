export default function authHeader() {
  let user = JSON.parse(storage.getItem('user'));

  if (user && user.token){
    return { 'Authorization': 'Bearer ' + user.token };
  } else {
    return {};
  }
}
