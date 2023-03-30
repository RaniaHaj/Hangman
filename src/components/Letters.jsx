import Letter from "./Letter";
import React, { Component } from "react";

const Letters = ({ letters, onClickListener }) => {
  return Object.keys(letters).map((l) => (
    <Letter
      onClickListener={onClickListener}
      letter={l}
      class_name={letters[l] ? "selected" : "letter"}
    />
  ));
};

export default Letters;
