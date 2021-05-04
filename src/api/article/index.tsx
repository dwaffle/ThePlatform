import axios from 'axios';
// import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
// import { IArticle } from "../../../services/crud-server/src/models/article";
import { HOSTNAME } from '../config';

export default {
  get: async () => {
    return axios.get(`${HOSTNAME}/articles`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/articles`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  getSingleArticle: async (artId: number) => {
    // console.log(`${HOSTNAME}/articles/${artId}`);
    return axios.get(`${HOSTNAME}/articles/${artId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  patch: async (body?: any) => {
    return axios.patch(`${HOSTNAME}/articles`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  put: async (body?: any) => {
    return axios.put(`${HOSTNAME}/articles`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },

  delete: async (id: string) => {
    return axios.delete(`${HOSTNAME}/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  },
};
