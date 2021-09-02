import request from 'superagent';

const URL = 'https://safesrc.herokuapp.com/';

export async function getAllResources() {
  const { body } = await request.get(`${URL}api/v1/resources`);
  return body;
}

export async function getOneResource(id) {
  const { body } = await request.get(`${URL}api/v1/resources/${id}`);
  
  return body;
}

export async function getResourcesByCityName(name) {
  const { body } = await request.get(`${URL}api/v1/cities/search/${name}`);

  return body;
}
