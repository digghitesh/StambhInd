import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Customer from './Customer';


import CustomerView from './CustomerView';


class CustomerPage extends Component {
	
	
	
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	      key: 'add',
	    };
	  }

	  render() {
	    return (
	      <Tabs
	        id="controlled-tab-example"
	        activeKey={this.state.key}
	        onSelect={key => this.setState({ key })}
	      >
	        <Tab eventKey="add" title="Add">
	          
	        <Customer/>
	        
	        </Tab>
	        <Tab eventKey="view" title="View">

	        <CustomerView/>
	        
	        </Tab>
	       
	      </Tabs>
	    );
	  }
	
	
}

export default CustomerPage;