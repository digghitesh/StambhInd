import React, { Component } from 'react';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el);
    this.$el.DataTable({
      // dom: '<"data-table-wrapper"t>',
      data: this.state.data,
      columns: this.props.columns
    });
  }
  componentWillUnmount() {
    // this.$el.DataTable.destroy(true);
    // $('.data-table-wrapper')
    //    .find('table')
    //    .DataTable()
    //    .destroy(true);
  }

  shouldComponentUpdate(nextProps) {
    //this.setState({ data: ['xyz', 'asd', '122'] });
    this.$el.data = ['xyz', 'asd', '122'];
  }

  render() {
    return (
      <div>
        <table className="display" ref={el => (this.el = el)} />
      </div>
    );
  }
}

export default Table;
