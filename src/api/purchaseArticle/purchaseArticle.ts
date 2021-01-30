import axios from 'axios'
import {HOSTNAME} from '../config'

export default {
    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/purchaseArticle` , body, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          });
    },
}
