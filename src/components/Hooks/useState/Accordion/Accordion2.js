import { useState } from "react";
import Data from "./AccordionData";

function AccordionMeta({ data }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <section>
      <div>
        <h3>{data.faq}</h3>
        <button onClick={handleClick}>{open ? "-" : "+"}</button>
      </div>
      {open && <p>{data.answer}</p>}
    </section>
  );
}

function ShowAccordion() {
  return (
    <>
      <h1>React Frequently Asked Questions</h1>
      <div>
        {Data.map((question) => {
         return <AccordionMeta key={question.id} data={question}/>
        })}
      </div>
    </>
  );
}

export default ShowAccordion;
