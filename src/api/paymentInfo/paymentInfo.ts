import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
  post: async (user_id: any) => {
    return axios.post(`${HOSTNAME}/paymentInfo`, user_id, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },
};
