import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const emptyFunction = () => {};

const init = () => {
  ReactDOM.render(
      <App gameTimes={7} errorCount={3} handleClick={emptyFunction} />,
      document.querySelector(`#root`)
  );
};

init();
