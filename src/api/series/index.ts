import axios from 'axios';
// import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
// import { IArticle } from "../../../services/crud-server/src/models/article";
import { HOSTNAME } from '../config';

export default {
  get: async () => {
    return axios.get(`${HOSTNAME}/series`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/series`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  //   patch: async (body?: any) => {
  //     return axios.patch(`${HOSTNAME}/series`, body, {
  //       headers: {
  //         Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  //       },
  //     });
  //   },

  //   delete: async (id: string) => {
  //     return axios.delete(`${HOSTNAME}/series/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  //       },
  //     });
  //   },
};
