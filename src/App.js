import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

export default function App() {
  const [data, setData] = useState("");
  const textt = (num) => {
    setData({ ...data, fromValue: num.target.value });
    console.log(num.target.value);
    console.log(data);
  };

  const convert = () => {};

  return (
    <>
      <div className="container">
        <div className="grand">
          <nav className="navbar">
            {" "}
            <h2
              style={{
                textAlign: "center",
                padding: "10px",
                fontFamily: "serif",
              }}>
              {" "}
              Weight Converter
            </h2>
          </nav>
          <div className="label_div">
            <label
              style={{
                color: "white",
              }}>
              From
            </label>
            <label
              style={{
                color: "white",
                paddingLeft: "190px",
              }}>
              To
            </label>
          </div>
          <div className="input_div">
            <input className="input_1" />

            <input className="input_2" onChange={textt} />
          </div>
          <from />
          <Button />

          <div className="btn_div">
            <button className="convert_btn" onClick={convert}>
              <h3>Convert</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
