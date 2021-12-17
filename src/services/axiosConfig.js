import axios from 'axios';

const baseURL = 'https://gateway.marvel.com/v1/public/';

const params = {
  ts: '1639579549',
  apikey: '675e88860a317c9fa707b6ec4f2bab64',
  hash: 'e046f1150696684c3e797240ae34e657'
}

export const instance = axios.create({
  baseURL,
  params
});

export default instance;