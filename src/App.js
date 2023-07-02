import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import axios from "axios";

export default function App() {
  const [data, setData] = useState("");
  const [op, setOp] = useState(data);
  const textt = (num) => {
    setData({ ...data, fromValue: num.target.value });
    console.log(num.target.value);
  };
  console.log(data);

  const getData = (data1) => {
    setData({ ...data, ...data1 });
    console.log(data1);
  };

  const convert = async () => {
    const options = {
      // method: "GET",
      // url: "https://unit-measurement-conversion.p.rapidapi.com/convert",

      params: { ...data, type: "weight" },

      headers: {
        "X-RapidAPI-Key": "44fd12d7e9mshc97fba051aa42bbp1e55c5jsnc2dd769b5228",
        "X-RapidAPI-Host": "unit-measurement-conversion.p.rapidapi.com",
      },
    };

    await axios
      .get(
        "https://unit-measurement-conversion.p.rapidapi.com/convert",
        options
      )
      .then((res) => {
        setOp(res.data.value);
        console.log(res.data);
      });
  };

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
            <input className="input_1" value={op} />

            <input required className="input_2" onChange={textt} />
          </div>
          <from />
          <Button info={getData} />

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
