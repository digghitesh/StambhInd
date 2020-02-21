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

class QualityTypeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerTypes: [],
      customerTypeId: -1
    };

    this.handleModelWindow = this.handleModelWindow.bind(this);
  }

  componentDidMount() {
    console.log(this.props);

    var self = this;
    qualityTypeService.getCustomerTypes().then(function(result) {
      console.log(result);
      self.setState({ customerTypes: result.data });

      self.$el = $(self.el);
      self.$el.DataTable({
        data: self.state.customerTypes,
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
      .getQualityTypes({ ProductId: param.ProductId })
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

export default QualityTypeView;
