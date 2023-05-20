/*import { useState } from "react";
import Questions from "./AccordionData";

/*const AccordionDropdown = () => {
  const FAQlist = Questions.map((question) => (
    <li key={question.id}>
      <h4> {question.faq}</h4>
    </li>;
  ));
  return <ul>{FAQlist}</ul>;
};*/

/*const AccordionDropdown = ({isOpen}) => {
    const FAQlist = Questions.map((question) => (
      <li key={question.id}>
        <h4> {question.faq}</h4>
        {isOpen && <p>{question.answer}</p>}
      </li>
    ));
    return <ul>{FAQlist}</ul>;
  };

function Accordion() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <section>
      <h2>React Frequently Asked Questions</h2>
      <div>
        <AccordionDropdown isOpen={open}/>
        <button onClick={handleToggle}>{open ? "+" : "-"}</button>
      </div>
    </section>
  );
}

export default Accordion;*/
