import axios from 'axios';
const BASEURL = 'http://localhost:4000'

export async function uploadArticle(data) {
  return await axios.post(`${BASEURL}/api/article`, data).catch(error => {
    return error;
  })
}

export async function uploadImage(data) {
  return await axios.post(`${BASEURL}/api/upload`, data).then(res => res?.data).catch(error => {
    return error
  })
}