import axios from 'axios';
import { BASE_URL } from './constants';

export const getPokemonOfDay = async () => {
  return axios.get(`${BASE_URL}/pokemon`);
};
