const BASEURL = 'http://localhost:4000'

export async function uploadArticle(data) {
  return await fetch(`${BASEURL}/api/article`, {
    method: 'POST',
    body: data
  }).catch(error => {
    return error;
  })
}

export async function getAllArticle() {
  const response = await fetch(`${BASEURL}/api/article`);
  const data = await response.json();
  return data;
}