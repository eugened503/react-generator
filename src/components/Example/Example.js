import "./Example.css";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

function Example({
  isA,
  isB,
  isNewStr,
  isNewResult,
  isFlag,
  index,
  getТumbers,
}) {
  const [isText, setIsText] = useState("");
  const [isStyle, setIsStyle] = useState("");

  if (isNewResult < 0) {
    [isA, isB] = [isB, isA];
    isNewResult = Math.abs(isNewResult);
  }

  useEffect(() => {
    setIsText("");
    setIsStyle("");
  }, [isA]);

  function handleChange(e) {
    if (Number(e.target.value) === isNewResult) {
      setIsStyle("example-container_aright");
    } else {
      setIsStyle("example-container_fix");
    }
    setIsText(e.target.value);
    getТumbers(e.target.id, e.target.value);
  }

  return (
    <div
      className={classNames(`example-container ${isStyle}`, {
        visible: isFlag,
      })}
    >
      <span className="example-container__span">{isA}</span>
      <span className="example-container__span">{isNewStr}</span>
      <span className="example-container__span">{isB}</span>
      <span className="example-container__span">=</span>
      <input
        required
        className="example-container__input"
        value={isText}
        onChange={handleChange}
        disabled={isFlag}
        id={index}
      />
    </div>
  );
}

export default Example;
