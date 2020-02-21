import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import UserService from '../../services/UserService';

import UserInfo from '../../utils/UserInfo';

import App from '../../App';

import LoadingSpinner from '../../utils/LoadingSpinner';

const userService = new UserService();


const msgDiv = {
		height : '40px',
		padding : '10px' 
};


class Login extends Component {
	

	constructor(props) {
        super(props);
        
        this.state = {
    			errorMsg: '',
    			isDisplay : false,
    			isLoading : false
    		};
    
     // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetState = this.handleResetState.bind(this);
      }
	
	
	
	doLogin(){
		
		this.setState({
    			errorMsg: '',
    			isDisplay : false,
    			isLoading : true
    		});
		
		userService.validateUser(
				{
		            "username": this.refs.userName.value,
		            "password": this.refs.password.value,
		        } 		
		
		).then((result)=>{
			
			var userInfo = new UserInfo(result.data.token,result.data.userid,result.data.username,result.data.email)
			
			console.log("Login success with username =" + userInfo.username);
			
			sessionStorage.setItem("userinfo",JSON.stringify(userInfo));
			
			window.location.href = "http://localhost:3000/";
          
        }).catch((err)=>{
          
        if (err.response)	
           this.setState({ errorMsg: err.response.data.error ,isDisplay : true, isLoading : false});
        else
           this.setState({ errorMsg: "Server not available" ,isDisplay : true, isLoading : false});
        	
          
          
        });
      }
	
	   handleSubmit(event) {
		   
		   this.doLogin();
		   
	        event.preventDefault();
	      }
	   
	   
	   handleResetState(){
		   
		   this.setState({ errorMsg: '', isDisplay : false });
	   }
	   
	   
	   render() {
	        return (
	        		<div className="card col-4 mx-auto">
	        		<article className="card-body">
	        			<h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
	        			<hr/>
	        			
	        			{this.state.isDisplay ? (
		        			<div className="alert alert-danger" role="alert" style={msgDiv}>
		        			  <i className="fa fa-times-circle"></i>
		        			  &nbsp;&nbsp;
		        			  {this.state.errorMsg}
		        			</div>
	        			):
	        			  ""	
	        			}
	        			
	        			{ this.state.isLoading && <LoadingSpinner value={'Logging...'}/> }
	        			
	        			<form onSubmit={this.handleSubmit}>
	        			<div className="form-group">
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        				    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
	        				 </div>
	        				<input className="form-control" placeholder="login" type="text"  ref='userName'  onChange={this.handleResetState}/>
	        			</div> 
	        			</div> 
	        			<div className="form-group">
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        				    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
	        				 </div>
	        			    <input className="form-control" placeholder="******" type="password" ref='password' onChange={this.handleResetState}/>
	        			</div> 
	        			</div> 
	        			<div className="form-group">
	        			<button type="submit" className="btn btn-primary btn-block"> Login  </button>
	        			</div> 
	        			<p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
	        			</form>
	        		</article>
	        		</div> 
	          
	        );
	      }   
	
	
}


export default Login;