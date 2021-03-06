import axios from 'axios';

const baseURL = "http://localhost:8000/";
const api = axios.create({
  baseURL
});

export async function get(path) {
    return await api.get(path);
}

export async function deleteById(path, id) {
  return await api.delete(`${path}/${id}`)
}

export async function post(path, newHero) {
  return await api.post(path, newHero)
}





