import React from 'react';

const LoadingSpinner = (props) => (
  
  <div>
    <i className="fa fa-spinner fa-spin" /> {props.value ? props.value : 'Loading...'}
  </div>
);

export default LoadingSpinner;