import React, { Component } from 'react';

import {CustomerCombo} from '../common/Combo';

import CottonDetailsService from '../../services/CottonDetailsService';


const cottonDetailsService = new CottonDetailsService();


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


class CottonDetails extends Component{
	
	constructor(props) {
        super(props);
        this.state = {
        		userInfo : JSON.parse(sessionStorage.getItem("userinfo")),
        		actionIcon : actionInfo['Add'].icon,
        		action : actionInfo['Add'].text,
        		cottonWeight : 0,
        		netWeight : 0,
        		finalUtara : 0.0,
        		finalRatePerKg : 0
        		
        	   }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculateCottonWeight = this.calculateCottonWeight.bind(this);
        this.calculateNetWeight = this.calculateNetWeight.bind(this);
        this.calculateFinalUtara = this.calculateFinalUtara.bind(this);
      }
	
	
	
	handleCreate(){
		
		cottonDetailsService
	      .addCottonDetails({
	    	CottonDetailsId: this.refs.cottonDetailsId.value,  
	    	VehicleNo: this.refs.vehicleNo.value,
	    	Broker: parseInt(this.refs.customerType.refs.customerTypeId.value),
	        BuyDate: this.refs.buyDate.value,
	        Village: this.refs.village.value,
	        Vyapari: this.refs.vyapari.value,
	        GrossWeight: this.refs.grossWeight.value,
	        EmptyVehicleWeight: this.refs.emptyVehicleWeight.value,
	        Kanta: this.refs.kanta.value,
	        Moisture: this.refs.moisture.value,
	        UtaraSample: this.refs.utaraSample.value,
	        UtaraGeneral: this.refs.utaraGeneral.value,
	        Utara3: this.refs.utara3.value,
	        RatePerKg: this.refs.ratePerKg.value,
	        Vatav: this.refs.vatav.value,
	        Girai: this.refs.girai.value,
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
  
    
    numberValue(val){
    	
    	if (isNaN(val) || val=="")
    		 return 0;
    	 else
    		 return val;
    }
    
    
    calculateCottonWeight(){
    	
    	let cweight = parseInt(this.numberValue(this.refs.grossWeight.value)) - parseInt(this.numberValue(this.refs.emptyVehicleWeight.value))
    	
    	this.setState({ cottonWeight :  cweight});
    	
    }
    
  calculateNetWeight(){
    	
    	let nweight = parseInt(this.refs.cottonWeight.value) - parseInt(this.numberValue(this.refs.kanta.value)) - parseInt(this.numberValue(this.refs.moisture.value))
    	
    	this.setState({ netWeight :  nweight});
    	
    }
	
  calculateFinalUtara(){
  	
  	let fUtara = (parseFloat(this.numberValue(this.refs.utaraSample.value)) + parseFloat(this.numberValue(this.refs.utaraGeneral.value)) + parseFloat(this.numberValue(this.refs.utara3.value)))/3
  	
  	this.setState({ finalUtara :  fUtara});
  	
  }
  
	
	handleSubmit(event) {

    	console.log(this.refs);
    	
        if(this.refs.cottonDetailsId.value){
          
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
	          <input type="hidden" ref='cottonDetailsId'/>
	        	  
	          <div className="card " style={ {maxWidth:'800px'}}>
	          <div className="card-header" style={{background: '#0062cc',color: 'white'}} >{this.state.action} Product</div>
	          
		          <div className="card-body">
				  
		          
		          
		          <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >Vehicle No</label>
				           <input type="text" className="form-control" ref="vehicleNo"  />
				        </div>
				        <div className="form-group col-md-3">
			              	<label  >Date</label>
				            <input type="Date" className="form-control" ref="buyDate"  />
				        </div>    
			      </div>
			      
			      
			      <div className="form-row">
		          	<div className="form-group col-md-4">
			           <label  >Village</label>
			           <input type="text" className="form-control" ref="village"  />
			        </div>
			        <div className="form-group col-md-4">
		              	<label  >Vyapari</label>
			            <input type="text" className="form-control" ref="vyapari"  />
			        </div>   
			         <div className="form-group col-md-4">
		              	<label >Broker</label>
			            <CustomerCombo customerType="1" ref="customerType"/>
			        </div> 
			       </div>
			      
			       <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >Gross Weight</label>
				           <input type="text" className="form-control" ref="grossWeight"  onChange={this.calculateCottonWeight}/>
				        </div>
				        <div className="form-group col-md-4">
			              	<label  >Empty Vehicle Weight</label>
				            <input type="text" className="form-control" ref="emptyVehicleWeight"  onChange={this.calculateCottonWeight}/>
				        </div>   
				         <div className="form-group col-md-4">
			              	<label  >Cotton Weight</label>
				            <input type="text" className="form-control" ref="cottonWeight" value={this.state.cottonWeight}  readonly="true"/>
				        </div> 
			       </div>
			       
			       
			       <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >Kanta</label>
				           <input type="text" className="form-control" ref="kanta"  onChange={this.calculateNetWeight} />
				        </div>
				        <div className="form-group col-md-4">
			              	<label  >Moisture</label>
				            <input type="text" className="form-control" ref="moisture"  onChange={this.calculateNetWeight} />
				        </div>   
				         <div className="form-group col-md-4">
			              	<label >NetWeight</label>
				            <input type="text" className="form-control" ref="netWeight"  value={this.state.netWeight} readonly="true"/>
				        </div> 
			       </div>
			       
			       <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >Utara Sample</label>
				           <input type="text" className="form-control" ref="utaraSample"  onChange={this.calculateFinalUtara}/>
				        </div>
				        <div className="form-group col-md-4">
			              	<label  >Utara General</label>
				            <input type="text" className="form-control" ref="utaraGeneral" onChange={this.calculateFinalUtara} />
				        </div>  
			            <div className="form-group col-md-4">
				           <label  >Utara3</label>
				           <input type="text" className="form-control" ref="utara3" onChange={this.calculateFinalUtara} />
				        </div>
			      </div>
			      
			      <div className="form-row">
			          	<div className="form-group col-md-12">
				          	<label  >Final Utara</label>
				            <input type="text" className="form-control" ref="finalUtara"  value={this.state.finalUtara}  readonly="true"/>
				        </div>
			       </div>
			      
			      
			      <div className="form-row">
			          	<div className="form-group col-md-4">
				           <label  >Rate Per 20Kg</label>
				           <input type="text" className="form-control" ref="ratePerKg"  />
				        </div>
				        <div className="form-group col-md-4">
			              	<label >Vatav</label>
				            <input type="text" className="form-control" ref="vatav"  />
				        </div>   
				         <div className="form-group col-md-4">
			              	<label >Girai</label>
				            <input type="text" className="form-control" ref="girai"  />
				        </div> 
			       </div>
			       
			       <div className="form-row">
			          	<div className="form-group col-md-12">
				           <label  >Final Rate Per 20Kg</label>
				           <input type="text" className="form-control" ref="finalRatePerKg"  value={this.state.finalRatePerKg}  readonly="true"/>
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
	          
export default CottonDetails;