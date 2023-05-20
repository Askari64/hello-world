import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

/*STOPPING PROPOGATION

When you click on a button:

React calls the onClick handler passed to <button>.
That handler, defined in Button, does the following:
Calls e.stopPropagation(), preventing the event from bubbling further.
Calls the onClick function, which is a prop passed from the Toolbar component.
That function, defined in the Toolbar component, displays the button’s own alert.
Since the propagation was stopped, the parent <div>’s onClick handler does not run.*/

function PlayButton({ moviename }) {
  function PlayButtonHandle() {
    alert(`Playing ${moviename}`);
  }

  return <Button onClick={PlayButtonHandle}>Play "{moviename}"</Button>;
}

function Upload() {
  return <Button onClick={() => alert("Uploading...")}>Upload</Button>;
}

function Toolbar() {
  return (
    <div onClick={() => alert("Clicked the div")}>
      <PlayButton moviename="Chronicles of Narnia" />
      <Upload />
    </div>
  );
}

export default Toolbar;

/*import React from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ moviename }) {
  function PlayHandle() {
    alert(`Playing ${moviename}`);
  }

  return <Button onClick={PlayHandle}>Play "{moviename}"</Button>;
}

function Upload() {
  return <Button onClick={() => alert("Uploading")}>Upload</Button>;
}

export default function ButtonPanel() {
  return (
    <>
      <PlayButton moviename="Spirited Away" />
      <Upload />
    </>
  );
}*/
