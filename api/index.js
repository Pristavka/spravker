import axios from 'axios';

const fetchOrgsAsync = url => axios.get(url).then(response => response.data);
const addOrgAsync = (url, body) => axios.post(url, body).then(response => response.data);

export default {
  fetchOrgsAsync,
  addOrgAsync
};
