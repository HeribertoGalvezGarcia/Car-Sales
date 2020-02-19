import React from 'react';
import {connect} from "react-redux";

function Header({image, name, price}) {
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
}

export default connect(({car: {image, name, price}}) => ({image, name, price}))(Header);
