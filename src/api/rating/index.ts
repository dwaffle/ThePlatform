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

  // getRatingByArticleId: async (ratArtId: number) => {
  //    console.log(`${HOSTNAME}/rating/${ratArtId}`);
  //   return axios.get(`${HOSTNAME}/rating/${ratArtId}`, {
  //     headers: {
  //       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //     },
  //   });
  // },

};
