import axios from 'axios'
import {HOSTNAME} from '../config'

export default {
    post: async ( body:any ) => {
        axios.post(`${HOSTNAME}/user` , body).then((response) => {response.data.find((user:any) => {localStorage.setItem('user', user.user_userName)
        localStorage.setItem('userId', user.user_id)
        localStorage.setItem('email', user.user_email)
        ;

});
    })
    }
}
