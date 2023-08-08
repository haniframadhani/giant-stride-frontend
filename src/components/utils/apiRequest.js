const BASEURL = process.env.REACT_APP_BASE_URL

export async function uploadArticle(data) {
  let token = await getToken().then(response => response.json()).then(result => result.accessToken);
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  return await fetch(`${BASEURL}api/article`, {
    method: 'POST',
    headers,
    body: data
  }).catch(error => {
    return error;
  })
}

export async function getAllArticle() {
  const response = await fetch(`${BASEURL}api/article`);
  const data = await response.json();
  return data;
}

export async function getOneArticle(id) {
  const response = await fetch(`${BASEURL}api/article?id=${id}`)
  const data = await response.json();
  return data;
}

export async function deleteArticle(id) {
  let token = await getToken().then(response => response.json()).then(result => result.accessToken);
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  return await fetch(`${BASEURL}api/article?id=${id}`, {
    method: 'DELETE',
    headers
  }).catch(error => {
    return error;
  })
}

export async function updateArticle(id, data) {
  let token = await getToken().then(response => response.json()).then(result => result.accessToken);
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  headers.append("Authorization", `Bearer ${token}`);
  let urlencoded = new URLSearchParams();
  urlencoded.append("title", data.title);
  urlencoded.append("body", data.body);

  return await fetch(`${BASEURL}api/article?id=${id}`, {
    method: 'PATCH',
    headers,
    body: urlencoded
  }).catch(error => {
    return error;
  })
}

export async function Login(credentials) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "email": credentials.email,
    "password": credentials.password
  });

  return fetch(`${BASEURL}api/auth`, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    credentials: 'include'
  }).then(data => data.json())
}

export async function Logout() {
  return fetch(`${BASEURL}api/auth`, {
    method: 'DELETE',
    credentials: 'include'
  }).catch(error => {
    return error;
  })
}

async function getToken() {
  return fetch(`${BASEURL}api/auth`, {
    method: 'GET',
    credentials: 'include'
  }).catch(error => {
    return error;
  })
}