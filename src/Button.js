import React, { useState } from "react";
import "./App.css";

// const options1 = [
//   { key: "Km", text: "Km", value: "km" },
//   { key: "m", text: "m", value: "m" },
//   { key: "cm", text: "cm", value: "cm" },
//   { key: "mm", text: "mm", value: "mm" },
//   { key: "in", text: "in", value: "in" },
//   { key: "ft", text: "ft", value: "ft" },
//   { key: "ft-us", text: "ft-us", value: "ft-us" },
//   { key: "mi", text: "mi", value: "mi" },
//   { key: "yd", text: "yd", value: "yd" },
//   { key: "nm", text: "nm", value: "nm" },
//   { key: "μm", text: "μm", value: "μm" },
//   { key: "nMi", text: "nMi", value: "nMi" },
// ];

export default function Button({ info = () => {} }) {
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToVal] = useState("");
  const from = (value) => {
    info({ fromUnit: value });
    setFromVal(value);
  };

  const to = (value) => {
    info({ toUnit: value });
    setToVal(value);
  };

  return (
    <>
      <div className="scroll_bar">
        <p className="first_p">
          <button
            className={fromVal === "kilogram" ? "btn_active" : ""}
            value={"kilogram"}
            onClick={() => {
              from("kilogram");
            }}>
            Kilogram (kg)
          </button>
          <button
            className={fromVal === "gram" ? "btn_active" : ""}
            value={"gram"}
            onClick={() => {
              from("gram");
            }}>
            Gram (g)
          </button>
          <button
            className={fromVal === "pound" ? "btn_active" : ""}
            value={"pound"}
            onClick={() => {
              from("pound");
            }}>
            Pound (lb)
          </button>
          <button
            className={fromVal === "ouce" ? "btn_active" : ""}
            value={"ouce"}
            onClick={() => {
              from("ouce");
            }}>
            ouce (oz)
          </button>
          <button
            className={fromVal === "tonne" ? "btn_active" : ""}
            value={"tonne"}
            onClick={() => {
              from("tonne");
            }}>
            tonne (ton)
          </button>
          <button
            className={fromVal === "ton" ? "btn_active" : ""}
            value={"ton"}
            onClick={() => {
              from("ton");
            }}>
            {" "}
            ton (ton)
          </button>
          <button
            className={fromVal === "carat" ? "btn_active" : ""}
            value={"carat"}
            onClick={() => {
              from("carat");
            }}>
            carat (ct)
          </button>
          <button
            className={fromVal === "stone" ? "btn_active" : ""}
            value={"stone"}
            onClick={() => {
              from("stone");
            }}>
            stone (st)
          </button>
          <button
            className={fromVal === "catty" ? "btn_active" : ""}
            value={"catty"}
            onClick={() => {
              from("catty");
            }}>
            catty (China)
          </button>{" "}
          <br></br>
          <button
            className={fromVal === "mace" ? "btn_active" : ""}
            value={"mace"}
            onClick={() => {
              from("mace");
            }}>
            mace
          </button>
          <br></br>
          <button
            className={fromVal === "gram" ? "btn_active" : ""}
            value={"tael"}
            onClick={() => {
              from("tael");
            }}>
            tael (China)
          </button>
          <br></br>
          <button
            className={fromVal === "dan" ? "btn_active" : ""}
            value={"dan"}
            onClick={() => {
              from("dan");
            }}>
            dan (Japan){" "}
          </button>
          <br></br>
          <button
            className={fromVal === "artel" ? "btn_active" : ""}
            value={"artel"}
            onClick={() => {
              from("artel");
            }}>
            artel (Arab){" "}
          </button>
          <br></br>
          <button
            className={fromVal === "bale" ? "btn_active" : ""}
            value={"bale"}
            onClick={() => {
              from("bale");
            }}>
            bale (UK)
          </button>
          <button
            className={fromVal === "deneir" ? "btn_active" : ""}
            value={"deneir"}
            onClick={() => {
              from("deneir");
            }}>
            deneir(France)
          </button>
          <br></br>
          <button
            className={fromVal === "centner" ? "btn_active" : ""}
            value={"centner"}
            onClick={() => {
              from("centner");
            }}>
            centner
          </button>
          <br></br>
          <button
            className={fromVal === "gran" ? "btn_active" : ""}
            value={"gran"}
            onClick={() => {
              from("gran");
            }}>
            gran
          </button>
          <button
            className={fromVal === "lot" ? "btn_active" : ""}
            value={"lot"}
            onClick={() => {
              from("lot");
            }}>
            lot (Germany)
          </button>
          <button
            className={fromVal === "danoro" ? "btn_active" : ""}
            value={"danoro"}
            onClick={() => {
              from("danoro");
            }}>
            danoro
          </button>
          <br></br>
          <button
            className={fromVal === "etto" ? "btn_active" : ""}
            value={"etto"}
            onClick={() => {
              from("etto");
            }}>
            etto
          </button>
          <br></br>
          <button
            className={fromVal === "grano" ? "btn_active" : ""}
            value={"grano"}
            onClick={() => {
              from("grano");
            }}>
            grano
          </button>
          <br></br>
          <button
            className={fromVal === "arroba" ? "btn_active" : ""}
            value={"arroba"}
            onClick={() => {
              from("arroba");
            }}>
            Arroba
          </button>
          <br></br>
          <button
            className={fromVal === "funt" ? "btn_active" : ""}
            value={"funt"}
            onClick={() => {
              from("funt");
            }}>
            funt
          </button>
        </p>
        <p className="second_p">
          <button
            className={toVal === "gram" ? "btn_active" : ""}
            value={"gram"}
            onClick={() => {
              to("gram");
            }}>
            Gram (g)
          </button>
          <button
            className={toVal === "kg" ? "btn_active" : ""}
            value={"kilogram"}
            onClick={() => {
              to("kg");
            }}>
            Kilogram (kg)
          </button>
          <button
            className={toVal === "pound" ? "btn_active" : ""}
            value={"pound"}
            onClick={() => {
              to("pound");
            }}>
            Pound (lb)
          </button>
          <button
            className={toVal === "ouce" ? "btn_active" : ""}
            value={"ouce"}
            onClick={() => {
              to("ouce");
            }}>
            ouce (oz)
          </button>
          <button
            className={toVal === "tonne" ? "btn_active" : ""}
            value={"tonne"}
            onClick={() => {
              to("tonne");
            }}>
            tonne (ton)
          </button>
          <button
            className={toVal === "ton" ? "btn_active" : ""}
            value={"ton"}
            onClick={() => {
              to("ton");
            }}>
            {" "}
            ton (ton)
          </button>
          <button
            className={toVal === "carat" ? "btn_active" : ""}
            value={"carat"}
            onClick={() => {
              to("carat");
            }}>
            carat (ct)
          </button>
          <button
            className={toVal === "stone" ? "btn_active" : ""}
            value={"stone"}
            onClick={() => {
              to("stone");
            }}>
            stone (st)
          </button>
          <button
            className={toVal === "catty" ? "btn_active" : ""}
            value={"catty"}
            onClick={() => {
              to("catty");
            }}>
            catty (China)
          </button>{" "}
          <br></br>
          <button
            className={toVal === "mace" ? "btn_active" : ""}
            value={"mace"}
            onClick={() => {
              to("mace");
            }}>
            mace
          </button>
          <br></br>
          <button
            className={toVal === "tael" ? "btn_active" : ""}
            value={"tael"}
            onClick={() => {
              to("tael");
            }}>
            tael (China)
          </button>
          <br></br>
          <button
            className={toVal === "dan" ? "btn_active" : ""}
            value={"dan"}
            onClick={() => {
              to("dan");
            }}>
            dan (Japan){" "}
          </button>
          <br></br>
          <button
            className={toVal === "artel" ? "btn_active" : ""}
            value={"artel"}
            onClick={() => {
              to("artel");
            }}>
            artel (Arab){" "}
          </button>
          <br></br>
          <button
            className={toVal === "bale" ? "btn_active" : ""}
            value={"bale"}
            onClick={() => {
              to("bale");
            }}>
            bale (UK)
          </button>
          <button
            className={toVal === "deneir" ? "btn_active" : ""}
            value={"deneir"}
            onClick={() => {
              to("deneir");
            }}>
            deneir(France)
          </button>
          <br></br>
          <button
            className={toVal === "centner" ? "btn_active" : ""}
            value={"centner"}
            onClick={() => {
              to("centner");
            }}>
            centner
          </button>
          <br></br>
          <button
            className={toVal === "gran" ? "btn_active" : ""}
            value={"gran"}
            onClick={() => {
              to("gran");
            }}>
            gran
          </button>
          <button
            className={toVal === "lot" ? "btn_active" : ""}
            value={"lot"}
            onClick={() => {
              to("lot");
            }}>
            lot (Germany)
          </button>
          <button
            className={toVal === "danoro" ? "btn_active" : ""}
            value={"danoro"}
            onClick={() => {
              to("danoro");
            }}>
            danoro
          </button>
          <br></br>
          <button
            className={toVal === "etto" ? "btn_active" : ""}
            value={"etto"}
            onClick={() => {
              to("etto");
            }}>
            etto
          </button>
          <br></br>
          <button
            className={toVal === "grano" ? "btn_active" : ""}
            value={"grano"}
            onClick={() => {
              to("grano");
            }}>
            grano
          </button>
          <br></br>
          <button
            className={toVal === "arroba" ? "btn_active" : ""}
            value={"arroba"}
            onClick={() => {
              to("arroba");
            }}>
            Arroba
          </button>
          <br></br>
          <button
            className={toVal === "funt" ? "btn_active" : ""}
            value={"funt"}
            onClick={() => {
              to("funt");
            }}>
            funt
          </button>
        </p>
      </div>
    </>
  );
}
