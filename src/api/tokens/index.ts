import axios from 'axios';
import { HOSTNAME } from '../config';

interface ITokenPostRequest {
    username: string;
    password: string;
}

export default {

    post: async ( body:ITokenPostRequest ) => {
        return axios.post( `${HOSTNAME}/tokens`, body).then( (response:any) => {
            window.localStorage.setItem("token", response.data.token);
            return response.data;
        });
    }

}