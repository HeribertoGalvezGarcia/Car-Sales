import React from 'react';
import {useSelector} from "react-redux";

function Header() {
  const [image, name, price] = useSelector(({car: {image, name, price}}) => [image, name, price]);
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

export default Header;
