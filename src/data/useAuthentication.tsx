import { useHistory } from 'react-router';
import api from '../api';


export function useAuthentication(){

    const history = useHistory();    
    
    function login( username:string, password:string ){
        api.tokens.post({ username, password }).then(response => {
            history.push('/');
        });
    }

    return {
        login
    }
    
}