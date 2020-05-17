import React, { useContext, Fragment } from "react";
import AlertContext from "../../../context/alert/alertContext";
import "./Alert.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return <Fragment>{alert && <div className="alert">{alert}</div>}</Fragment>;
};

export default Alert;
