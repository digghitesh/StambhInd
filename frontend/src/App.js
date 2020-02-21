import React, { Component } from 'react';

import './App.css'

import MainPage from './MainPage'

import  Login  from './components/login/Login';



class App extends Component {
	
		
  render() {
	  const user = JSON.parse(sessionStorage.getItem("userinfo"));
	  
	  
	  
    return (
    		user ? <MainPage/> : <Login/>
    	
    );
  }
}

export default App;
