import axios from 'axios';
import { kebabCase } from 'lodash';

const client = axios.create({
  baseURL: 'https://5f7fe618d6aabe00166f0b9e.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
    checkKnown: (harvester) => client.get(`known/${kebabCase(harvester)}`),
};