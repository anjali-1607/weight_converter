import React from "react";
import "./App.css";

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
                paddingLeft: "180px",
              }}>
              To
            </label>
          </div>
          <div className="input_div">
            <input className="input_1" />

            <input className="input_2" />
          </div>
          <div className="scroll_bar">
            <p
              style={{
                width: "145px",
                height: "300px",
                border: "3px solid white",
                overflow: "auto",
                marginTop: "20px",
                color: "antiquewhite",
                padding: "0.5em 1em 0 1.5em",
                float: "left",
              }}>
              <option value="cm">Centimeters (cm)</option>
              <option value="inch">Inches (inch)</option>
            </p>
            <p
              style={{
                width: "145px",
                height: "300px",
                border: "3px solid white",
                overflow: "auto",
                marginTop: "20px",
                marginRight: "38px",
                color: "antiquewhite",
                padding: "0.5em 1.5em 0 1em",
                float: "right",
              }}>
              dumpy texth hsufdh huf ydhhjfihd uihdu uidhui hihsuifyvsdug hguvdf
              hugvhyusdy uedhrf euyruoifyh seudygues ufeyh b
            </p>
          </div>
          <div className="btn_div">
            <button
              style={{
                padding: "0 3em 0 3em",
                margin: "1em 0 2em 0",
                backgroundColor: "antiquewhite",
                borderRadius: "8px",
              }}>
              <h3>Convert</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
