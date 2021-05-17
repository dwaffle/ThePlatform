import axios from 'axios';
import { HOSTNAME } from '../config';

export default {
  post: async (body: any) => {
    console.log(body);
    axios.post(`${HOSTNAME}/user`, body).then((response) => {
      let data = JSON.parse(JSON.stringify(response.data));
      console.log(data);
      if (data[0] !== undefined) {
        localStorage.setItem('user_id', data[0].user_id);
        localStorage.setItem('user_type', data[0].user_type);
        localStorage.setItem('username', data[0].user_userName);
        localStorage.setItem('email', data[0].user_email);
        localStorage.setItem('first_name', data[0].user_firstName);
        localStorage.setItem('last_name', data[0].user_lastName);
        localStorage.setItem('user_instagram', data[0].user_instagram);
        localStorage.setItem('user_facebook', data[0].user_facebook);
        localStorage.setItem('user_twitter', data[0].user_twitter);
      } else {
        alert('There is no user with that information.');
      }
    });
  },
};
