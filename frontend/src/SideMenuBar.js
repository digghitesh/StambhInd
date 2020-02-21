import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import $ from 'jquery';

import LoadComponent from './utils/LoadComponent';

import LoadingSpinner from './utils/LoadingSpinner';

class SideMenuBar extends Component {
  constructor(props) {
    super(props);

    this.handleModelWindow = this.handleModelWindow.bind(this);
  }

  componentDidMount() {
    var $li = $('#MainMenu li').click(function() {
      $li.removeClass('selected');
      $(this).addClass('selected');
    });
  }

  loadPage(compName) {
    ReactDOM.render(
      <LoadComponent
        name={compName}
        handleModelWindow={this.handleModelWindow}
      />,
      document.getElementById('MainContent')
    );
  }

  handleModelWindow(param) {
    this.props.handleModelWindow(param);
  }

  render() {
    return (
      <div>
        <nav className="main-menu" id="MainMenu">
          <ul>
            <li className="selected">
              <a href="#">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.loadPage('QualityTypePage')}>
                <i className="fa fa-book fa-2x" />
                <span className="nav-text">Quality Type</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.loadPage('ProductPage')}>
                <i className="fa fa-list fa-2x" />
                <span className="nav-text">Product</span>
              </a>
            </li>

            <li>
              <a href="#" onClick={() => this.loadPage('CustomerPage')}>
                <i className="fa fa-table fa-2x" />
                <span className="nav-text">Customer</span>
              </a>
            </li>

            <li>
              <a href="#" onClick={() => this.loadPage('CottonDetailsPage')}>
                <i className="fa fa-folder-open fa-2x" />
                <span className="nav-text">CottonDetails</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.loadPage('AccountsPage')}>
                <i className="fa fa-bar-chart-o fa-2x" />
                <span className="nav-text">Accounts</span>
              </a>
            </li>

            <li>
              <a href="#" onClick={() => this.loadPage('SaudaPage')}>
	              <i className="fa fa-bookmark fa-2x" />
	              <span className="nav-text">Sauda</span>
             </a>
              
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideMenuBar;
