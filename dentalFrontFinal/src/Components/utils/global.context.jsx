import React, { createContext, useMemo, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext({
  state: initialState,
  setState: () => {}
});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setTheme = (newTheme) => {
    setState({ ...state, theme: newTheme });
  };

  const value = useMemo(() => ({ state, setTheme }), [state]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};

