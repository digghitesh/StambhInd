import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 1040,
      border: '1px solid blue',
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      display:'inline-block',
      margin: '70px 0px 0px 100px',
      border: '2px solid red',
      
    };
    
    const closeButton ={
    		position: 'fixed',	
    		zIndex: 2000,
    		float : 'right',
    		cursor: 'pointer',
    		border: '2px solid blue',
    	    
    };

    return (
      <div style={backdropStyle}  align="center">
	        <div style={modalStyle} >
	          <div style={closeButton}  >
		        <button type="button" className="close" data-dismiss="modal" 
		        	aria-label="Close" onClick={this.props.onClose} >
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		        <div align="left">
		          {this.props.children}
		        </div>  
	        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;