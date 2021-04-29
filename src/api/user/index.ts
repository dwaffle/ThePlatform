import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

  get: async () => {
    return axios.get(`${HOSTNAME}/users`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  delete: async (body: any) => {
    return axios.delete(`${HOSTNAME}/users`, body).then((response) => {
      return response.data;
    });
  },

  patch: async (body: any) => {
    return axios.patch(`${HOSTNAME}/user`, body).then((response) => {
      return response.data;
    });
  },
};
