import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
  get: async () => {
    return axios.get(`${HOSTNAME}/Organizations`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/organizations/`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  patch: async (body: any) => {
    return axios.patch(`${HOSTNAME}/organizations/`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  delete: async (id: string) => {
    return axios.delete(`${HOSTNAME}/Organizations/${id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },
};
