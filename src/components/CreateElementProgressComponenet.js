import React from "react";

const CreateElementProgressComponent = (props) => {
  return React.createElement(
    "h1",
    null,
    "Component without JSX",
    React.createElement(
      "p",
      null,
      "This component is made wihtout using JSX. We used React.createElement to make this", React.createElement('p',props,props.children)
    )
  )
};

export default CreateElementProgressComponent;
