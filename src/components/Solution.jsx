import React, { Component } from "react";
import Letter from "./Letter";

const Solution = ({ solution, letters }) => {
  return (
    <div className="label">
      {solution.word
        .split("")
        .map((l) =>
          letters[l] ? <Letter letter={l} /> : <Letter letter={"_"} />
        )}
      <br />
      <h3>{solution.hint}</h3>
    </div>
  );
};

export default Solution;
