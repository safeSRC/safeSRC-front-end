import request from 'superagent';
// import cities from './data/cities.js';
// import categories from './data/categories.js';
import resources from './data/resources.js';

const URL = 'https://safesrc1.herokuapp.com/';

export async function signup(name, email, password) {
  const data = await request.post(`${URL}/auth/signup`).send({
    name: name,
    email: email,
    password: password,
  });
  return data.body.token;
}

export async function signin(email, password) {
  const data = await request.post(`${URL}/auth/signin`).send({
    email: email,
    password: password,
  });
  return data.body.token;
}

export async function logout() {
  const data = await request.get(`${URL}/`).send({
    email: '',
    password: '',
  });
  return data.body;
}

export async function createResource(resourceData) {
  const { body } = await request.post(`${URL}/resources`).send(resourceData);

  return body;
}

export async function getAllResources() {
  const { body } = await request.get(`${URL}/resources`);

  return body;
}

export async function getOneResource(id) {
  const { body } = await request.get(`${URL}/resources/${id}`);

  return body;
}

export async function updateResource(id, resourceData) {
  const { body } = await request
    .put(`${URL}/resources/${id}`)
    .send(resourceData);

  return body;
}

export async function getAllCities() {
  const { body } = await request.get(`${URL}/cities`);

  return body;
}

export async function getOneCity(id) {
  const { body } = await request.get(`${URL}/cities/${id}`);

  return body;
}

export async function getAllCategories() {
  const { body } = await request.get(`${URL}/categories`);

  return body;
}

export async function getOneCategory(id) {
  const { body } = await request.get(`${URL}/categories/${id}`);

  return body;
}

export async function filterResources() {
  const { body } = await request.get(`${URL}/${resources.category}`);

  return body;
}

export async function deleteResource(id) {
  const { body } = await request.delete(`${URL}/resources/${id}`);

  return body;
}
