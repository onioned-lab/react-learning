import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buubuu from "./buubuu.png";
import TestCleanupDefault, { TestCleanup } from "./TestCleanup";

function InitA() {}

const InitB = () => {};

function App() {
  /// khai báo biến JS
  let a = 10;
  var b = 11;
  const c = 11;
  console.log("a");
  // console.log(a);
  // setTimeout(() => {
  //   a = 10000;
  // }, 2000);
  const [d, setD] = useState(1);
  // setTimeout(() => {
  //   setD(d + 1);
  // }, 1000);
  // useEffect(() => {
  //   console.log("b");

  //   setTimeout(() => {
  //     setD(d + 1);
  //   }, 1000);
  // }, []);

  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "red", fontSize: "30px" }}>Bai 1 cua Đăng Đăng</h1>
        <h2 className="hello">{d}</h2>
        <p>lorem ipsum dolor sit amet, consect </p>
        <img src={Buubuu} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {(() => {
            console.log("render");
            return <></>;
          })()}
        </a>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
        {toggle && <TestCleanup></TestCleanup>}
      </header>
    </div>
  );
}

export default App;
