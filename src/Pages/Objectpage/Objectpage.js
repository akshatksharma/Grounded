import React from "react";
import Fileform from "../../Fileform/Fileform.js";


const Objectpage = (props) => {
 
  let content = (
    <div className="page page--object" role="region" aria-label="Upload object">
      <h2 className="subtitle bold text--center">How to create a capsule:</h2>

      <div className="box flow">
        <div className="box__header">
          <h3 className="header__title">1. Choose an object</h3>
          <div className="header__background"></div>
        </div>
        <div className="box__content">
          <div className="box__text flow">
            <p className="text">
              It can be anything (an item, a room, a smell, a sound) that has
              gained or lost meaning to you since the pandemic began. 
            </p>
            <p className="text">Submit an image of your object.</p>
          </div>
        </div>
        <Fileform dataUpdater={props.updateData} />
      </div>
    </div>
  );
  return content;
};

export default React.memo(Objectpage);
