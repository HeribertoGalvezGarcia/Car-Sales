import React from 'react';
import {connect} from "react-redux";
import {removeFeature} from "../actions";

function AddedFeature({feature, removeFeature: remove}) {
  return (
    <li>
      <button onClick={e => {e.preventDefault(); remove(feature);}} className="button">X</button>
      {feature.name}
    </li>
  );
}

export default connect(null, {removeFeature})(AddedFeature);
