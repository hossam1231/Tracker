import React, { useContext, useState, createContext } from "react";

export const RouterContext = React.createContext();

export const RouterProvider = (props) => {
  const [page, setPage] = useState({ currentPage: "map", lastPage: null });

  return (
    <RouterContext.Provider value={[page, setPage]}>
      {props.children}
    </RouterContext.Provider>
  );
};
