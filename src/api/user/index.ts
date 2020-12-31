import axios from 'axios';
import { HOSTNAME } from '../config';

export default {

    delete: async ( body:any) => {
        return axios.delete( `${HOSTNAME}/users`, body).then( response => {
            return response.data;
        });
    },

    patch: async (body:any) => {
        return axios.patch( `${HOSTNAME}/user`, body).then (response => {return response.data})
    }

}