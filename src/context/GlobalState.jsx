import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

function GlobalStateProvider({ children }) {
  const [page, setPage] = useState(1);

  return (
    <Context.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalStateProvider;
