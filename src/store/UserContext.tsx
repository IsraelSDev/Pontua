import React, { createContext, useState, useContext } from 'react';

const userContext = createContext();

export function UserContextProvider({ children }) {
  const [data, setData] = useState({
    user: {},
    updateUser: (playload) => {
      setData((prevState) => ({ ...prevState, user: playload }));
    },
  });

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserContext() {
  return useContext(userContext);
}
