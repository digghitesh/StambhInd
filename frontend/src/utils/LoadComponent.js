import React, { Component } from 'react';

import LoadingSpinner from './LoadingSpinner';

import  ProductPage  from '../components/product/ProductPage'

import  CottonDetailsPage  from '../components/cottondetails/CottonDetailsPage'

import  QualityTypePage  from '../components/qualitytype/QualityTypePage'

import  CustomerPage  from '../components/customer/CustomerPage'

import  AccountsPage  from '../components/accounts/AccountsPage'


class LoadComponent extends React.Component {
	
	
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    
    this.handleModelWindow = this.handleModelWindow.bind(this);
  }
  
  
  componentDidMount() {
	    this.setState({isLoading: false})
	}
  
  handleModelWindow(param){
	  
//	  alert("LoadCo" + param);
	  
	  this.props.handleModelWindow(param);
	  
	 
  }
  
  render() {
	  
	  const isloading = this.state.isLoading;
	  
	  switch(this.props.name) {
	  
      case 'ProductPage': return(
    		isloading ? <LoadingSpinner/> : <ProductPage productId={this.props.id}  action={this.props.action} />
      );
      
      case 'CottonDetailsPage': return(
      		isloading ? <LoadingSpinner/> : <CottonDetailsPage action={this.props.action} />
        );
      case 'QualityTypePage': return(
        		isloading ? <LoadingSpinner/> : <QualityTypePage action={this.props.action} />
          );
      
      case 'CustomerPage': return(
      		isloading ? <LoadingSpinner/> : <CustomerPage action={this.props.action} />
        );
      
      case 'AccountsPage': return(
        		isloading ? <LoadingSpinner/> : <AccountsPage action={this.props.action} />
          );
      
      default: return(
    		  ""
      )
      
    }

	  
	}
  
}

export default LoadComponent;