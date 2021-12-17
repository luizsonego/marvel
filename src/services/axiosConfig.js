import axios from 'axios';
import { timeStamp } from '../helpers/formatTime';
import { hashApiMArvel } from '../helpers/hash';

const baseURL = 'https://gateway.marvel.com/v1/public/';

const params = {
  ts: timeStamp(),
  apikey: process.env.REACT_APP_PUBLICKEY,
  hash: hashApiMArvel()
}

export const instance = axios.create({
  baseURL,
  params
});

export default instance;