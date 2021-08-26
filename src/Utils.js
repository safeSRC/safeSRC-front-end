import request from 'superagent';
import cities from './data/cities.js';
import categories from './data/categories.js';
import resources from './data/resources.js';

// const URL = 'https://safesrc1.herokuapp.com/';

export async function signup(name, email, password) {
  const data = await request.post(`/auth/signup`).send({
    name: name,
    email: email,
    password: password,
  });
  return data.body.token;
}

export async function signin(email, password) {
  const data = await request.post(`/auth/signin`).send({
    email: email,
    password: password,
  });
  return data.body.token;
}

export async function logout() {
  const data = await request.get(`/`).send({
    email: '',
    password: '',
  });
  return data.body;
}

export async function createResource(resourceData) {
  const { body } = await request.post(`/resources`).send(resourceData);

  return body;
}

export async function getAllResources() {
  const { body } = await request.get(`/resources`);

  return body;
}

export async function getOneResource(id) {
  const { body } = await request.get(`/resources/${id}`);

  return body;
}

export async function updateResource(id, resourceData) {
  const { body } = await request
    .put(`/resources/${id}`)
    .send(resourceData);

  return body;
}

export async function getAllCities() {
  const { body } = await request.get(`/cities`);

  return body;
}

export async function getOneCity(id) {
  const { body } = await request.get(`/cities/${id}`);

  return body;
}

export async function getAllCategories() {
  const { body } = await request.get(`/categories`);

  return body;
}

export async function getOneCategory(id) {
  const { body } = await request.get(`/categories/${id}`);

  return body;
}

export async function filterResources() {
  const { body } = await request.get(`/${resources.category}`);

  return body;
}

export async function deleteResource(id) {
  const { body } = await request.delete(`/resources/${id}`);

  return body;
}
