import React from "react";
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

export default function Button() {
  function Hello() {
    console.log("1sthello");
  }
  return (
    <>
      <div className="scroll_bar">
        <p className="first_p">
          <button>Kilogram (kg)</button>
          <button>Gram (g)</button>
          <button>Pound (lb)</button>
          <button>ouce (oz)</button>
          <button>tonne (ton)</button>
          <button>ton (ton)</button>
          <button>carat (ct)</button>
          <button>stone (st)</button>
          <button>catty (China)</button> <br></br>
          <button>mace</button>
          <br></br>
          <button>tael (China)</button>
          <br></br>
          <button>dan (Japan) </button>
          <br></br>
          <button>artel (Arab) </button>
          <br></br>
          <button>bale (UK)</button>
          <button>deneir(France)</button>
          <br></br>
          <button>centner</button>
          <button>gran</button>
          <button>lot (Germany)</button>
          <button>danoro</button>
          <br></br>
          <button>etto</button>
          <br></br>
          <button>grano</button>
          <br></br>
          <button>Arroba</button>
          <br></br>
          <button>funt</button>
        </p>
        <p className="second_p">
          <button>Gram (g)</button>
          <button>Kilogram (kg)</button>
          <button>Pound (lb)</button>
          <button>ouce (oz)</button>
          <button>tonne (ton)</button>
          <button>ton (ton)</button>
          <button>carat (ct)</button>
          <button>stone (st)</button>
          <button>catty (China)</button> <br></br>
          <button>mace</button>
          <br></br>
          <button>tael (China)</button>
          <br></br>
          <button>dan (Japan) </button>
          <br></br>
          <button>artel (Arab) </button>
          <br></br>
          <button>bale (UK)</button>
          <button>deneir(France)</button>
          <br></br>
          <button>centner</button>
          <button>gran</button>
          <button>lot (Germany)</button>
          <button>danoro</button>
          <br></br>
          <button>etto</button>
          <br></br>
          <button>grano</button>
          <br></br>
          <button>Arroba</button>
          <br></br>
          <button>funt</button>
        </p>
      </div>
    </>
  );
}
