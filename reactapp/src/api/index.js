import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export const = var findstate = function findstate() {
  return api.get('/findstate');
};

export const = var findall = function findall() {
  return api.get('/findall');
};

export const = var findcity = function findcity() {
  return api.get('/findcity');
};

export const = var findstate = function findstate() {
  return api.get('/findstate');
};

const apis = {
  findone,
  findall,
  findcity,
  findstate
}

export default apis