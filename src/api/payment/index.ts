import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/payments`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  patch: async (body: any) => {
    return axios.patch(`${HOSTNAME}/payments`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },
};
