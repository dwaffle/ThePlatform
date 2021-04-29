import axios from "axios";
import { HOSTNAME } from "../config";

export default {

  get: async () => {
    return axios.get(`${HOSTNAME}/rating`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  },

  post: async (body: any) => {
    return axios.post(`${HOSTNAME}/rating`, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  },

  // getRatingByArticleId: async (artId: number) => {
  //   console.log(`${HOSTNAME}/rating/${artId}`);
  //   return axios.get(`${HOSTNAME}/rating/${artId}`, {
  //     headers: {
  //       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //     },
  //   });
  // },

};
