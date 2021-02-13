import axios from 'axios'
import {HOSTNAME} from '../config'

export default {

  get: async (user_id:any) => {
    return axios.get(`${HOSTNAME}/purchaseArticle/${user_id}`, {
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
