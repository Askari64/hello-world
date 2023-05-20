import React from "react";

const CreateElement = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "This has been made using React.createElement",
      React.createElement("p", null, "I hope I will be quick to learn React")
    )
  );
};

export default CreateElement;
