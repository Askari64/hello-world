import React from "react";

const ProgressComponent = (props) => {
  return (
    <>
      <h1>Functional Progress Component</h1>
      <p>
        This component is made for practicing whatever I just studied. It is a {props.type}
      </p>
      {props.children}
    </>
  );
};

export default ProgressComponent;
