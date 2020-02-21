import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import Modal from './utils/Modal';

import SideMenuBar from './SideMenuBar';

import LoadComponent from './utils/LoadComponent';



const divStyle = {
		  margin: '0px',
		  border: '0px solid pink'
		  
		};

const header = {
		height : '60px',
		border: '0px solid blue',
		background:'#3b5998'
};

const sidebar = {
		 width: '150px',
		 border: '0px solid blue',
		margin : '0px'
};


const mainContent = {
		 margin : '20px'
};


const ModelWindowContext = React.createContext();

class MainPage extends Component {
	
	constructor(props) {
	    super(props);

	    this.state = { 
	    		isOpen: false,
	    		compName : '',
	    		id : -1,
	    		action : 'Add'
	    		};
	    
	    this.toggleModal = this.toggleModal.bind(this);
	    this.handleModelWindow = this.handleModelWindow.bind(this);
	  }

	  toggleModal = (compName,id,action) => {
	    this.setState({
	      isOpen: !this.state.isOpen,
	      compName : compName,
	      id : id,
	      action : action
	    });
	  }
	  
	  handleModelWindow(param){
		  
		  alert("MainPage" + param);

		  
		 // this.toggleModal(param.compName,param.id,param.action);
	  }
	
	
  render() {
    return (
    		
    	<div className="container-fluid " style={divStyle}>
    	
    	<div className="row sticky-top" style={header}>
	    	<div className="col-sm">
		        Stambh Industries
		    </div>
		        
		    <ul className="nav navbar-right navbar-top-links">
                
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" >
                        <i className="fa fa-user fa-fw"></i> Hitesh Diggiwal <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>   
		        
		        
    	</div>
    	
    	<div className="row">
    	<div className="col-12 col-md-auto">
	        <div style={sidebar}>
	            <SideMenuBar  handleModelWindow={this.handleModelWindow}  ref="child"/>
	        </div>
	     </div>
	     <div className="col-12 col-md"> 
	     
	         
			     <Modal show={this.state.isOpen}
		         	onClose={()=>this.toggleModal('',-1)}>
		         	 
			        <LoadComponent name={this.state.compName} id={this.state.id} action={this.state.action}/>
			       
		         </Modal>
			        
		
		<ModelWindowContext.Provider value={{ handleModelWindow : this.handleModelWindow}}>
	     		<div id="MainContent" style={mainContent}>
	     		sadaa
	     		
	     		</div>
	    </ModelWindowContext.Provider>
		  </div>
    	</div>
    		
    	</div>
    );
  }
}

export default MainPage;

export const ModelWindowConsumer = ModelWindowContext.Consumer;