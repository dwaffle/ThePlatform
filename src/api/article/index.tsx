import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/article`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/article` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    patch: async ( id:string, body:any ) => {
        return axios.patch(`${HOSTNAME}/article/${id}`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    delete: async ( id:string ) => {
        return axios.delete(`${HOSTNAME}/article/${id}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    }

}