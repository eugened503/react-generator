import React from "react";
import "./Main.css";

function Main({
  isFlag,
  isName,
  matchCounter,
  errorMessage,
  background,
  handleChange,
  handleKeyPress,
  start,
  farther,
  moveOn,
  buttonVisibility,
  clear,
}) {
  return (
    <>
      {isFlag && (
        <div className="user-container">
          <h2>{isName} - молодец!</h2>
          <p className="user-container__info">
            Число правильных ответов: {matchCounter}
          </p>
          <p className="user-container__info">
            Число неправильных ответов: {10 - matchCounter}
          </p>
        </div>
      )}

      {errorMessage && <h2 className="error-message">Заполните все поля!</h2>}
      <div className="input-container">
        <div className="group">
          <input
            required
            className={!background ? `group__input` : `group__input_visibility`}
            value={isName}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
          />
          <span className="group__bar" />
          <label
            className={!background ? `group__label` : `group__label_visibility`}
          >
            Имя
          </label>
        </div>

        <button
          className={
            !background
              ? `input-container__button`
              : `input-container__button_visibility`
          }
          onClick={start}
        >
          Добавить имя
        </button>

        <button
          className={
            farther
              ? `input-container__button`
              : `input-container__button_visibility`
          }
          onClick={moveOn}
        >
          Далее
        </button>

        <button
          className={
            buttonVisibility
              ? `input-container__button`
              : `input-container__button_visibility`
          }
          onClick={clear}
        >
          Поробовать еще раз
        </button>
      </div>
    </>
  );
}

export default Main;
