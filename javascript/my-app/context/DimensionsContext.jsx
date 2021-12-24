import React, { useContext, useState, createContext } from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const DimensionsContext = React.createContext();

export const DimensionsProvider = (props) => {
  const [Dim, setDim] = useState({
    windowWidth: windowWidth,

    windowHeight: windowHeight,
  });

  return (
    <DimensionsContext.Provider value={Dim}>
      {props.children}
    </DimensionsContext.Provider>
  );
};
