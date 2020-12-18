import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
    
    get: async () => {
        return axios.get(`${HOSTNAME}/tasks`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    post: async ( body:any ) => {
        return axios.post(`${HOSTNAME}/tasks` , body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    patch: async ( id:string, body:any ) => {
        return axios.patch(`${HOSTNAME}/tasks/${id}`, body, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    },

    delete: async ( id:string ) => {
        return axios.delete(`${HOSTNAME}/tasks/${id}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        });
    }

}