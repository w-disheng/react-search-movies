import React from "react";
import ReactDOM from "react-dom";

import SearchMovie from "./SearchMovie";
import "./styles.css";

const rootElement = document.getElementById("root");

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovie />
      </div>
    );
  }
}

export default Main;

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
