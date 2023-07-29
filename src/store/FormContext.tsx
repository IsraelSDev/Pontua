// contextUtils.js
import React, { createContext, useState, useContext } from "react";

const formContext = createContext();

export function FormContextProvider({ children }) {
  const [data, setData] = useState({
    step: 1,
    handleStep: (playload) => {

      setData((prevState) => ({ ...prevState, step: playload }));
    },
  });

  return <formContext.Provider value={data}>{children}</formContext.Provider>;
}

export function useformContext() {
  return useContext(formContext);
}
