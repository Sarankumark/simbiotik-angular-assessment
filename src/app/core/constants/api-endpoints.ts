import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiUrl;

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/users/login`,
  FIND: `${BASE_URL}/find`,
  GET_DETAILS: (imdbId: string) => `${BASE_URL}/detail/${imdbId}`,
  TODOS: `${BASE_URL}/todos`,
};