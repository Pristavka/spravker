import axios from 'axios';

const fetchOrgsAsync = url => axios.get(url).then(response => response.data);

const addOrgAsync = (url, body) =>
  axios
    .post(url, body, { headers: { 'content-type': 'application/json' } })
    .then(response => response.data);

export default {
  fetchOrgsAsync,
  addOrgAsync
};
