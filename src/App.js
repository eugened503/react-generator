import "./App.css";
import React, { useState } from "react";
import Example from "./components/Example/Example";
import Main from "./components/Main/Main";

function App() {
  const [isFlag, setIsFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [background, setBackground] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [farther, setFarther] = useState(false);
  const zero = [...Array(10)].map((e, i) => i).fill("zero");
  const [isEnteredValues, setIsEnteredValues] = useState(zero);
  const [isName, setIsName] = useState("");
  const [isObj, setIsObj] = useState([]);
  const copy = isObj.map((x) => Math.abs(x.result));
  let matchCounter = 0;

  for (let i = 0; i < isEnteredValues.length; i++) {
    if (Number(isEnteredValues[i]) === copy[i]) {
      matchCounter += 1;
    }
  }

  function randomString() {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    const randomNumber = Math.round(Math.random());
    const str = randomNumber === 0 ? "+" : "-";
    const result = randomNumber === 0 ? a + b : a - b;
    const newObj = { a, b, str, result };
    return newObj;
  }

  const start = () => {
    if (isName === "") {
      setErrorMessage(true);
    } else {
      const example = [];
      setBackground(true);
      setIsFlag(false);
      setErrorMessage(false);
      setFarther(true);
      setIsEnteredValues(zero);
      for (let i = 0; i < 10; i++) {
        const randomExample = randomString();
        example.push(randomExample);
      }
      setIsObj(example);
    }
  };

  function getТumbers(indexArr, str) {
    if (str === "") {
      str = "zero";
    }

    isEnteredValues[indexArr] = str;
    setIsEnteredValues([...isEnteredValues]);
  }

  function moveOn() {
    const checkString = isEnteredValues.indexOf("zero") !== -1;
    if (checkString) {
      setErrorMessage(true);
    }
    if (!checkString) {
      setErrorMessage(false);
      setIsFlag(true);
      setFarther(false);
      setButtonVisibility(true);
    }
  }

  function handleChange(e) {
    setIsName(e.target.value);
    setErrorMessage(false);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      start();
    }
  }

  function clear() {
    setIsName("");
    setIsFlag(false);
    setIsObj([]);
    setBackground(false);
    setButtonVisibility(false);
  }

  return (
    <div className="app">
      <div
        className={
          !background ? `app__number app__number_background` : `app__number`
        }
      >
        {isObj.map((item, index) => {
          return (
            <Example
              key={index}
              isA={item.a}
              isB={item.b}
              isNewStr={item.str}
              isNewResult={item.result}
              isFlag={isFlag}
              index={index}
              getТumbers={getТumbers}
            />
          );
        })}
      </div>
      <Main
        isFlag={isFlag}
        isName={isName}
        matchCounter={matchCounter}
        errorMessage={errorMessage}
        background={background}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        start={start}
        farther={farther}
        moveOn={moveOn}
        buttonVisibility={buttonVisibility}
        clear={clear}
      />
    </div>
  );
}

export default App;
