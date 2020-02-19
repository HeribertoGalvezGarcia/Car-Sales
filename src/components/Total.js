import React from 'react';
import {connect} from "react-redux"

function Total({price, additionalPrice}) {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
}

export default connect(({car: {price}, additionalPrice}) => ({price, additionalPrice}))(Total);
