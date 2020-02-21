import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

//import Accounts from './Accounts';


import AccountsView from './AccountsView';


class AccountsPage extends Component {
	
	
	
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	      key: 'accounts',
	    };
	  }

	  render() {
	    return (
	      <Tabs
	        id="controlled-tab-example"
	        activeKey={this.state.key}
	        onSelect={key => this.setState({ key })}
	      >
	     
	        <Tab eventKey="accounts" title="Accounts">

	        <AccountsView/>
	        
	        </Tab>
	       
	      </Tabs>
	    );
	  }
	
	
}

export default AccountsPage;