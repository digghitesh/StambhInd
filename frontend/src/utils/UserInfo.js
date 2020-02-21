

class UserInfo{
	
	constructor(token,userid,username,email) {
		this.userid = userid;
		this.token = token;
	    this.username = username;
	    this.email = email;
	  }
	
	
	getUserId(){
		
		return this.userid;
	}
	
	getToken(){
		
		return this.token;
	}
	
	getUserName(){
			
		return this.username;
		
	}
	
	getEmail(){
		
		return this.email;
	}
	
	
}

export default UserInfo;