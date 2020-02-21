import React, { memo } from 'react';

import CustomerService from '../../services/CustomerService';

import ProductService from '../../services/ProductService';


const customerService = new CustomerService();

const productService = new ProductService();



const CustomerTypeCombo = React.forwardRef((props, ref) => (
		<select  className="form-control" ref={ref}>
		    <option value="-1" >Select</option>
		    <option value="1" >Broker</option>
		    <option value="2" >Client</option>
		  </select>
		));


class CustomerCombo extends React.PureComponent {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      customers : [] 
	    };
	  }
	
	componentDidMount() {
	    console.log(this.props);
	    var self = this;
	    customerService.getCustomers({CustomerTypeId : this.props.customerType}).then(function(result) {
	      console.log(result);
	      self.setState({ customers: result.data });
	    });
	  }

  render() {

    return (
      <div>
	      <select  className="form-control" ref="customerTypeId">
		    <option value="-1" >Select</option>
		    {this.state.customers.map((row, index) => ( 
		    		
		    		<option key={index} value={row.CustomerId} > {row.FirstName} {row.LastName} </option>
		    ))}
		    
		  </select>
      </div>
    )
  }

}



class ProductsCombo extends React.PureComponent {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      products : [] 
	    };
	  }
	
	componentDidMount() {
	    console.log(this.props);
	    var self = this;
	    productService.getProducts().then(function(result) {
	      console.log(result);
	      self.setState({ products: result.data });
	    });
	  }

  render() {

    return (
      <div>
	      <select  className="form-control" ref="productId">
		    <option value="-1" >Select</option>
		    {this.state.products.map((row, index) => ( 
		    		
		    		<option key={index} value={row.ProductId}  > {row.ProductName}</option>
		    ))}
		    
		  </select>
      </div>
    )
  }

}

export {CustomerTypeCombo,CustomerCombo,ProductsCombo};

