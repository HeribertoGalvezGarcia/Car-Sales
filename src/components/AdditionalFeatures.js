import React from 'react';
import {useSelector} from "react-redux";
import AdditionalFeature from './AdditionalFeature';

function AdditionalFeatures() {
  const additionalFeatures = useSelector(({additionalFeatures}) => additionalFeatures);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
}

export default AdditionalFeatures;
