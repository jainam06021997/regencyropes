import React from "react";

const BlockTitle = (props) => {
  return (
    <div>
      <div className={`block-title text-${props.textAlign} `}>
        <h3>{props.titleText}</h3>
      </div>
      <p>{props.paraText}</p>
    </div>
  );
};

export default BlockTitle;
