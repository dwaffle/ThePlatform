import axios from 'axios'
import {HOSTNAME} from '../config'

export default {
    get: async ( body:any ) => {
        return axios.get(`${HOSTNAME}/user` , body);
    },
}
