import React, { useReducer } from "react";
import { SET_THEME } from "./types";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
const AppState = props => {
  const initialState = {
    themeColor: "default",
    commandList: ["set theme --dark", "open portfolio", "open profile", "open contact"]
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        themeColor: state.themeColor
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
