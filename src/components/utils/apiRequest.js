// const BASEURL = 'http://localhost:4000'
const BASEURL = process.env.REACT_APP_BASE_URL

export async function uploadArticle(data) {
  return await fetch(`${BASEURL}api/article`, {
    method: 'POST',
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

export async function deleteArticle(id) {
  return await fetch(`${BASEURL}api/article?id=${id}`, {
    method: 'DELETE'
  }).catch(error => {
    return error;
  })
}