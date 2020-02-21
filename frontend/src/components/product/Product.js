import React, { Component } from 'react';

import queryString from 'query-string';

import ProductService from '../../services/ProductService';

const productService = new ProductService();

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


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        		userInfo : JSON.parse(sessionStorage.getItem("userinfo")),
        		actionIcon : actionInfo['Add'].icon,
        		action : actionInfo['Add'].text
        	   }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    componentDidMount(){
    	if (this.props.productId){
	    	const productId = this.props.productId;
	    	const action = this.props.action; 
	    	console.log(productId) 
	        if(productId)
	        {
	        	productService.getProducts({"ProductId": productId }).then((resp)=>{
	        	this.refs.productId.value = resp.data[0].ProductId;
	        	this.refs.productName.value = resp.data[0].ProductName;
	          })
	          
	          this.setState(
	        		  {
	        			userInfo : JSON.parse(sessionStorage.getItem("userinfo")),
	              		actionIcon : actionInfo[action].icon,
	              		action : actionInfo[action].text
	              	   }	  
	          
	          );
	        }
    	}
      }
    
    
    handleCreate(){
    	productService.addProduct(
          {
            "ProductId": this.refs.productId.value,
            "ProductName": this.refs.productName.value,
            "UserId": this.state.userInfo.userid,
           
        }          
        ).then((result)=>{
          alert("Product created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
    
    handleUpdate(){
    	productService.updateProduct(
          {
        	"ProductId": this.refs.productId.value,
            "ProductName": this.refs.productName.value,
            "UserId": this.state.userInfo.userid,
           
        }          
        ).then((result)=>{
          alert("Product Updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
    
    handleDelete(){
    	productService.deleteProduct(
          {
        	"ProductId": this.refs.productId.value,
            "ProductName": this.refs.productName.value,
            "UserId": this.state.userInfo.userid,
           
        }          
        ).then((result)=>{
          alert("Product Updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
    
    
    handleSubmit(event) {

    	console.log(this.refs);
    	
        if(this.refs.productId.value){
          
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
    
    
    handleCancel = () => { 
    	  this.myFormRef.reset();
    	}
    
    
    render() {
        return (
          <form  onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
          <input type="hidden" ref='productId'/>
        	  
          <div className="card " style={ {width:'600px'}}>
          <div className="card-header" style={{background: '#0062cc',color: 'white'}} >{this.state.action} Product</div>
          
	          <div className="card-body">
			      <div className="row">
		             <div className="col-3" > 
			              Product Name:
			         </div>
		             <div className="col-9"> 
			              <input className="form-control" type="text" ref='productName' required readOnly={this.state.action=="Delete"}/>
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


export default Product;