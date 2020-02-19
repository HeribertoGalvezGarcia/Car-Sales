import React from 'react';
import {useSelector} from "react-redux"

function Total() {
  const [price, additionalPrice] = useSelector(({car: {price}, additionalPrice}) => [price, additionalPrice]);
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
}

export default Total;
