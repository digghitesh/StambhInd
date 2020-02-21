import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { ModelWindowConsumer } from '../../MainPage';


import ProductService from '../../services/ProductService';

//import 'datatables.net-dt/css/jquery.dataTables.min.css';

const $ = require('jquery');
$.DataTable = require('datatables.net-dt');
require( 'datatables.net-buttons-dt' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
var jsZip  = require('jszip');
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

window.JSZip = jsZip;

//require('datatables.net-bs4/css/dataTables.bootstrap4.min.css');


const productService = new ProductService();

const deleteStyle = {
  color: '#cd0000'
};

const buttonStyle = {
		
		marginLeft : 10
};

const columns = [
  { title: 'Product Name', data: 'ProductName' },
  { title: 'Created By', data: 'UserName' },
  { title: 'Created At', data: 'CreatedAt' },
 // { title: 'Operation', render : return ("<button  onClick={ alert(this) } >Edit</button>") },
  {
	  title: 'Operation',
//      data: "ProductId",
	  render: function (data, type, row) {
          // ******** use self here (instead of this) ********
          return '<a href="#" onClick={ alert(data) } >Edit </a>'
      }
  },
]


class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productId: -1
    };

    this.handleModelWindow = this.handleModelWindow.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel = (event) => { 
//	  alert("HI");
	  
	  var self = this;
	    productService.getProducts({"ProductName":"K"}).then(function(result) {
	      console.log(result);
	      self.setState({ products: result.data });
	      
	      const table = $(self.el).DataTable();
	     
	      table.clear().rows.add(result.data).draw();
	    });
	  
	  
	  
	  event.preventDefault();
	}
  
  componentDidMount() {
    console.log(this.props);

    var self = this;
    productService.getProducts().then(function(result) {
      console.log(result);
      self.setState({ products: result.data });

      self.$el = $(self.el);
      self.$el.DataTable({
    	dom: 'Bfrtip',
//    	 buttons: [
//    		  'excelHtml5', 'pdfHtml5' //, 'csvHtml5'
//    	    ],
    	buttons : [
    		
    		{
                extend:    'excelHtml5',
                text:      '<i class="fa fa-file-excel-o btn-danger"> Excel</i>',
                titleAttr: 'Excel'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="fa fa-file-pdf-o"> Pdf</i>',
                titleAttr: 'PDF'
            }
    		
    	],
    	
        data: self.state.products,
        columns: [
        	  { title: 'Product Name', data: 'ProductName' },
        	  { title: 'Created By', data: 'UserName' },
        	  { title: 'Created At', data: 'CreatedAt' },
        	{  
        	  title : 'Operation',
        	  data : 'ProductId',
        	  createdCell: (td, cellData, rowData, row, col) =>
              ReactDOM.render(
            		  
//            <ModelWindowContext.Consumer>
//            {({modelWindow}) => (
                <button
                 // onClick={() => modelWindow }>
                onClick={() => self.handleModelWindow(rowData) }>
                 data
                </button>
//            )}   
//            </ModelWindowContext.Consumer>    
                 
                 , td),
          }, 
        	  
        	],
        // info: false,
         bFilter: false,
        //lengthChange: false,
       
      });
    });
  }
  
 

  handleModelWindow(row) {
	  
	  console.log(row)
	  
  }

  render() {
    return (
      <div>
      
      <button className="btn btn-danger  btn-sm pull-right" type="button" style={buttonStyle}  onClick={this.handleCancel} >
  	<i className="fa fa-ban">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</i>
  </button>
      
        <table
          className="table table-striped table-bordered table-sm" style={{width:"100%"}}
          ref={el => (this.el = el)}
        />
      
      <ModelWindowConsumer>
      {({ handleModelWindow }) => (
          <button
            onClick={() => handleModelWindow }>
           data
          </button>
      )}   
      </ModelWindowConsumer>    
        
        
        </div>
        
    
        
    );
  }
}

export default ProductView;
