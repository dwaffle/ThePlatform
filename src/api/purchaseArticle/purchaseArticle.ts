import axios from 'axios'
import {HOSTNAME} from '../config'

export default {

  get: async (body:any) => {
    return axios.get(`${HOSTNAME}/purchaseArticle`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  },

    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/purchaseArticle` , body, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        });
    },

}
