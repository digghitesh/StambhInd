import React, { Component } from 'react';

import QualityTypeService from '../../services/QualityTypeService';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const qualityTypeService = new QualityTypeService();

const deleteStyle = {
  color: '#cd0000'
};

const columns = [
  { title: 'Customer Type', data: 'CustomerTypeName' },
  { title: 'Created By', data: 'UserName' },
  { title: 'Created At', data: 'CreatedAt' }
];

class CustomerTypeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qualityTypes: [],
      qualityTypeId: -1
    };

    this.handleModelWindow = this.handleModelWindow.bind(this);
  }

  componentDidMount() {
    console.log(this.props);

    var self = this;
    qualityTypeService.getQualityTypes().then(function(result) {
      console.log(result);
      self.setState({ qualityTypes: result.data });

      self.$el = $(self.el);
      self.$el.DataTable({
        data: self.state.qualityTypes,
        columns: columns,
         info: false,
         bFilter: false,
        lengthChange: false
      });
    });
  }

  handleModelWindow(param) {
    this.props.handleModelWindow(param);

    var self = this;

    qualityTypeService
      .getQualityTypes({ QualityTypeId : param.QualityTypeId })
      .then(function(result) {
        self.state.products[param.index] = {
          CustomerTypeId: result.data.CustomerTypeId,
          CustomerTypeName: result.data.CustomerTypeName,
          UserName: result.data.UserName,
          CreatedAt: result.data.CreatedAt
        };

        self.setState({ products: self.state.customerTypes });
      });
  }

  render() {
    return (
      <div>
        <table
          className="table table-striped table-bordered"
          ref={el => (this.el = el)}
        />
      </div>
    );
  }
}

export default CustomerTypeView;
