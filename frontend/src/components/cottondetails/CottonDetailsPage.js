import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import CottonDetails from './CottonDetails';


import CottonDetailsView from './CottonDetails';

class ProductPage extends Component {
	
	
	
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
	          
	        <CottonDetails/>
	        
	        </Tab>
	        <Tab eventKey="view" title="View">

	        <CottonDetailsView/>
	        
	        </Tab>
	       
	      </Tabs>
	    );
	  }
	
	
	
}

export default ProductPage;