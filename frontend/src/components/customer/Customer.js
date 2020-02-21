import React, { Component } from 'react';

import {CustomerTypeCombo,ProductsCombo} from '../common/Combo';

import CustomerService from '../../services/CustomerService';


const customerService = new CustomerService();

const buttonDiv ={
		
		height : '50px'
		
};

const buttonStyle = {
		
		marginLeft : 10
};

const actionInfo ={
		
		Add : {text : 'Add' , icon :  'fa fa-plus'},
		Update : {text : 'Upadte' , icon :  'fa fa-pencil-square-o'},
		Delete : {text : 'Delete' , icon :  'fa fa-trash'}
} 


class Customer extends Component{
	
	constructor(props) {
        super(props);
        this.state = {
        		userInfo : JSON.parse(sessionStorage.getItem("userinfo")),
        		actionIcon : actionInfo['Add'].icon,
        		action : actionInfo['Add'].text
        	   }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.customerType = React.createRef();
      }
	
	
	
	handleCreate(){
		
		customerService
	      .addCustomer({
	    	CustomerId: this.refs.customerId.value,  
	    	CustomerTypeId: parseInt(this.refs.customerType.value),
	        ProductId: parseInt(this.refs.product.refs.productId.value),
	        FirstName: this.refs.firstName.value,
	        MiddleName: this.refs.middleName.value,
	        LastName: this.refs.lastName.value,
	        GstOrPanNo: this.refs.gstOrPanNo.value,
	        Address: this.refs.address.value,
	        EmailId: this.refs.emailId.value,
	        MobileNo: parseInt(this.refs.mobileNo.value),
	        UserId: this.state.userInfo.userid
	      })
	      .then(result => {
	        alert('Customer Type created!');
	      })
	      .catch(() => {
	        alert('There was an error! Please re-check your form.');
	      });
    	
      }
    
    handleUpdate(){
    	
      }
    
    handleDelete(){
    	
      }
	
    handleCancel = () => { 
  	  this.myFormRef.reset();
  	}
  
	
	
	handleSubmit(event) {

    	console.log(this.refs);
    	
        if(this.refs.customerId.value){
          
	         if (this.props.action=="Update"){
	        	this.handleUpdate();
	          	console.log("Update");
	         }else
	          {
	        	 this.handleDelete();
		         console.log("Delete");
	          }
        }
        else
        {
        console.log("Add");
          this.handleCreate();
        }

        event.preventDefault();
      }
    
	
	
	 render() {
	        return (
	          <form  onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
	          <input type="hidden" ref='customerId'/>
	        	  
	          <div className="card " style={ {maxWidth:'800px'}}>
	          <div className="card-header" style={{background: '#0062cc',color: 'white'}} >{this.state.action} Customer</div>
	          
		          <div className="card-body">
				  
		         
			      
			      <div className="form-row">
		          	<div className="form-group col-md-4">
			           <label  >Cutomer Type</label>
			           <CustomerTypeCombo ref="customerType"/>
			        </div>
			        <div className="form-group col-md-4">
		              	<label  >Deal in</label>
			            <ProductsCombo ref="product"/>
			        </div>   
			        
			       </div>
			      
			       <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >First Name</label>
				           <input type="text" className="form-control" ref="firstName"  />
				        </div>
				        <div className="form-group col-md-4">
			              	<label >Middle Name</label>
				            <input type="text" className="form-control" ref="middleName"  />
				        </div>
				         <div className="form-group col-md-4">
			              	<label  >Last Name</label>
				            <input type="text" className="form-control" ref="lastName"  />
				        </div>
			       </div>
			       
			       
			       <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label >GST/PAN No</label>
				           <input type="text" className="form-control" ref="gstOrPanNo"  />
				        </div>
				        <div className="form-group col-md-4">
			              	<label  >Mobile</label>
				            <input type="text" className="form-control" ref="mobileNo"  />
				        </div>   
				         <div className="form-group col-md-4">
			              	<label >Email</label>
				            <input type="text" className="form-control" ref="emailId"  />
				        </div> 
			       </div>
			       
			       <div className="form-row">
			          	<div className="form-group col-md-12">
				           <label  >Address</label>
				           <input type="textarea" className="form-control" ref="address"  />
				        </div>
			      </div>
			      
			     
			        
		         </div>
			        
			    <div className="card-footer" style={buttonDiv}>
			    
				    <button className="btn btn-danger  btn-sm pull-right" type="button" style={buttonStyle}  onClick={this.handleCancel} >
				    	<i className="fa fa-ban">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</i>
		            </button>
			    
		            <button className="btn btn-success  btn-sm pull-right " type="submit" style={buttonStyle}  >
		            	<i className={this.state.actionIcon}>&nbsp;&nbsp;{this.state.action}&nbsp;&nbsp;</i>
		            </button>
		            
		        </div>   
			        
		         </div>
	            
	            
	          </form>
	        );
	      }  
	
	
}
	          
export default Customer;