import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class UserService{

    
	validateUser(user){
    	
    	const url = `${API_URL}/login/`;
        return axios.post(url,user);
    }
    
}