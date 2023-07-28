// contextUtils.js
import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [data, setData] = useState({
    currentPage: 'home',
    handleCurrentPage: (playload) => {
      setData((prevState) => ({ ...prevState, currentPage: playload }));
    },
  });

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
}

export function usePageContext() {
  return useContext(PageContext);
}
