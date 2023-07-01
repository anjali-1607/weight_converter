import React from "react";
import "./App.css";
import Button from "./Button";

export default function App() {
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

            <input className="input_2" />
          </div>
          <Button />

          <div className="btn_div">
            <button
              className="convert_btn"
              style={{
                padding: "0 3em 0 3em",
                margin: "1em 0 2em 0",
                backgroundColor: "antiquewhite",
                borderRadius: "8px",
                color: "black",
              }}>
              <h3>Convert</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
