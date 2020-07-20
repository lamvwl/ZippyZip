import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',
})

export const findone = function findone() {
  return api.get('/findone');
};

export const findall = function findall(limit) {
  return api.get('/findall', {params: {limit: limit}});
};

export const findcity = function findcity(query, limit) {
  return api.get('/findcity', {params: {limit: limit, query: query}});
};

export const findstate = function findstate(query, limit) {
  return api.get('/findstate', {params: {limit: limit, query: query}});
};

const apis = {
  findone,
  findall,
  findcity,
  findstate
}

export default apis