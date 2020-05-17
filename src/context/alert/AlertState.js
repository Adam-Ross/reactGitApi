import React, { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertConext from "./alertContext";

import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Methos

  // setAlert
  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: msg });
  };

  // remove alert
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
