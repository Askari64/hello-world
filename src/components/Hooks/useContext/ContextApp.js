import React from "react";
import Context1 from "./Context1";

  export const firstNameContext = React.createContext();
  export const middleNameContext = React.createContext();
  export const lastNameContext = React.createContext();

function ContextApp() {

  return (
    <firstNameContext.Provider value={"Syed Mohammed"}>
      <middleNameContext.Provider value={"Askari"}>
        <lastNameContext.Provider value={"Rizvi"}>
          <Context1 />
        </lastNameContext.Provider>
      </middleNameContext.Provider>
    </firstNameContext.Provider>
  );
}

export default ContextApp;
