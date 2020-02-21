import React, { Component } from 'react';

import QualityTypeService from '../../services/QualityTypeService';

const qualityTypeService = new QualityTypeService();

const buttonDiv = {
  height: '50px'
};

const buttonStyle = {
  marginLeft: 10
};

const actionInfo = {
  Add: { text: 'Add', icon: 'fa fa-plus' },
  Update: { text: 'Upadte', icon: 'fa fa-pencil-square-o' },
  Delete: { text: 'Delete', icon: 'fa fa-trash' }
};

class QualityType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: JSON.parse(sessionStorage.getItem('userinfo')),
      actionIcon: actionInfo['Add'].icon,
      action: actionInfo['Add'].text
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.customerTypeId) {
      const customerTypeId = this.props.customerTypeId;
      const action = this.props.action;
      console.log(customerTypeId);
      if (customerTypeId) {
    	  qualityTypeService
          .getQualityTypes({ CustomerTypeId: customerTypeId })
          .then(resp => {
            this.refs.customerTypeId.value = resp.data[0].CustomerTypeId;
            this.refs.customerTypeName.value = resp.data[0].CustomerTypeName;
          });

        this.setState({
          userInfo: JSON.parse(sessionStorage.getItem('userinfo')),
          actionIcon: actionInfo[action].icon,
          action: actionInfo[action].text
        });
      }
    }
  }

  handleCreate() {
	  qualityTypeService
      .addQualityType({
        CustomerTypeId: this.refs.customerTypeId.value,
        CustomerTypeName: this.refs.customerTypeName.value,
        UserId: this.state.userInfo.userid
      })
      .then(result => {
        alert('Customer Type created!');
      })
      .catch(() => {
        alert('There was an error! Please re-check your form.');
      });
  }

  handleUpdate() {
	  qualityTypeService
      .updateQualityType({
        CustomerTypeId: this.refs.customerTypeId.value,
        CustomerTypeName: this.refs.customerTypeName.value,
        UserId: this.state.userInfo.userid
      })
      .then(result => {
        alert('CutomerType Updated!');
      })
      .catch(() => {
        alert('There was an error! Please re-check your form.');
      });
  }

  handleDelete() {
	  qualityTypeService
      .deleteQualityType({
        CustomerTypeId: this.refs.customerTypeId.value,
        CustomerTypeName: this.refs.customerTypeName.value,
        UserId: this.state.userInfo.userid
      })
      .then(result => {
        alert('CutomerType Updated!');
      })
      .catch(() => {
        alert('There was an error! Please re-check your form.');
      });
  }

  handleSubmit(event) {
    console.log(this.refs);

    if (this.refs.customerTypeId.value) {
      if (this.props.action == 'Update') {
        this.handleUpdate();
        console.log('Update');
      } else {
        this.handleDelete();
        console.log('Delete');
      }
    } else {
      console.log('Add');
      this.handleCreate();
    }

    event.preventDefault();
  }

  handleCancel = () => {
    this.myFormRef.reset();
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <form onSubmit={this.handleSubmit} ref={el => (this.myFormRef = el)}>
          <input type="hidden" ref="customerTypeId" />
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="customerTypeName">Customer Type Name </label>
              <input
                className="form-control"
                type="text"
                ref="customerTypeName"
                required
                readOnly={this.state.action == 'Delete'}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <button
                className="btn btn-danger  btn-sm pull-right"
                type="button"
                style={buttonStyle}
                onClick={this.handleCancel}
              >
                <i className="fa fa-ban">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</i>
              </button>

              <button
                className="btn btn-success  btn-sm pull-right "
                type="submit"
                style={buttonStyle}
              >
                <i className={this.state.actionIcon}>
                  &nbsp;&nbsp;{this.state.action}&nbsp;&nbsp;
                </i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QualityType;
