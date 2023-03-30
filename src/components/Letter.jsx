import React, { Component } from "react";

const Letter = ({ letter, onClickListener, class_name }) => {
  const childIsExist = () => {
    onClickListener(letter);
  };
  return (
    <span onClick={childIsExist} className={class_name}>
      {letter}
    </span>
  );
};

export default Letter;
