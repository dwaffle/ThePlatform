import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

    delete: async ( body:any) => {
        return axios.delete( `${HOSTNAME}/users`, body).then( response => {
            return response.data;
        });
    }

}