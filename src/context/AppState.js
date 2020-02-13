import React, { useReducer } from "react";
import { SET_COMMAND } from "./types";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { commandExists } from "../helpers/checkCommand";

const AppState = props => {
  const initialState = {
    themeColor: "default",
    commandList: ["set theme --dark", "set theme --light", "open portfolio", "open profile", "open contact"]
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const chooseCommand = command => {
    if (!commandExists(command, state.commandList)) {
      return;
    } else {
      console.log("command was inserted...");
    }

    dispatch({ type: SET_COMMAND, payLoad: command });
  };

  return (
    <AppContext.Provider
      value={{
        themeColor: state.themeColor,
        chooseCommand
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
