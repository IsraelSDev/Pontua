// contextUtils.js
import React, { createContext, useState, useContext } from "react";

const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [data, setData] = useState({
    currentPage: "home",
    handleCurrentPage: (playload) => {
      setData((prevState) => ({ ...prevState, currentPage: playload }));
    },
    hero: {},
    selectHero: (payload) => {
      setData((prevState) => ({ ...prevState, hero: payload }));
    },
    heroListStorage: [],
    changeHeroList: (payload) => {
      setData((prevState) => ({ ...prevState, heroListStorage: payload }));
    }
  });

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
}

export function usePageContext() {
  return useContext(PageContext);
}
