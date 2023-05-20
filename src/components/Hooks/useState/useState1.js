import React from "react";
import { useState } from "react";
import sculptureList from "./useState1Data";

function Exhibit() {
  const [index, setIndex] = useState(0);
  const [showMore, toggleShowMore] = useState(false);

  function handleIndex() {
    setIndex(index + 1);
  }

  function handleShowMore() {
    toggleShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <h1>
        {sculpture.name} by {sculpture.artist}
      </h1>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleIndex}>Next</button>
      <br />
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} details
      </button> <br/>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

export default Exhibit;
