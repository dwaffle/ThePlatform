import axios from 'axios';
import { HOSTNAME } from '../config';

//For individual organizations.
export default {
  get: async () => {
    return axios.get(`${HOSTNAME}/Organization`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/organization/`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  patch: async (body: any) => {
    return axios.patch(`${HOSTNAME}/organization/`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  delete: async (id: string) => {
    return axios.delete(`${HOSTNAME}/organization/${id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },
};
