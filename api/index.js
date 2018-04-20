import axios from 'axios';

const fetchORGS = url => axios.get(url);
const addORG = (url, body) => axios.post(url, body);

export default {
  fetchORGS,
  addORG
};
