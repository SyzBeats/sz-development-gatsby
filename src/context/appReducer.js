import { SET_COMMAND } from "./types";
import { commandExists } from "../helpers/checkCommand";
export default (state, action) => {
  switch (action.type) {
    case SET_COMMAND: {
      return {
        ...state
      };
    }
  }
};
