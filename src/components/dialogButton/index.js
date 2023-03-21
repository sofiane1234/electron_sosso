import React from "react";
import { Nav } from "../container";

const DialogButton = ({ onClick, title }) => {
  return  <Nav onClick={onClick}> {title}</Nav>;
};

export default DialogButton;
