import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import QualityType from './QualityType';


import QualityTypeView from './QualityTypeView';


class QualityTypePage extends Component {
	
	
	
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
	          
	        <QualityType/>
	        
	        </Tab>
	        <Tab eventKey="view" title="View">

	        <QualityTypeView/>
	        
	        </Tab>
	       
	      </Tabs>
	    );
	  }
	
	
}

export default QualityTypePage;