import React, { useState, createContext } from "react";
import App from "../App";
export const PageContext = createContext();

export const PageProvider = (props) => {
  const [page, setPage] = useState();

  return (
    <PageContext.Provider value={[page, setPage]}>
        <App/>
      {props.children}
    </PageContext.Provider>
  );
};
