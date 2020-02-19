import React from 'react';
import {useDispatch} from "react-redux";
import {addFeature} from "../actions";

function AdditionalFeature({feature}) {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={e => {e.preventDefault(); dispatch(addFeature(feature));}} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
}

export default AdditionalFeature;
