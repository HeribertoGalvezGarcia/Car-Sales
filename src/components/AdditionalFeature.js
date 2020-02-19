import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions";

function AdditionalFeature({feature, addFeature: add}) {
  return (
    <li>
      <button onClick={e => {e.preventDefault(); add(feature);}} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
}

export default connect(null, {addFeature})(AdditionalFeature);
