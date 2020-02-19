import React from 'react';
import {useDispatch} from "react-redux";
import {removeFeature} from "../actions";

function AddedFeature({feature}) {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={e => {e.preventDefault(); dispatch(removeFeature(feature));}} className="button">X</button>
      {feature.name}
    </li>
  );
}

export default AddedFeature;
