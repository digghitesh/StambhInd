import axios from 'axios';

const API_URL = 'http://localhost:8000';

const user = JSON.parse(sessionStorage.getItem("userinfo"));

var token ='';

if (user!=null){
	token = user.token;
}

const RequestHandler = axios.create({
	  baseURL: API_URL,
	  headers: {
	      'Authorization': 'Token ' + token
	    }
	});


export default RequestHandler;