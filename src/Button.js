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
  const from = (value) => {
    console.log({ fromUnit: value });
  };

  return (
    <>
      <div className="scroll_bar">
        <p className="first_p">
          <button value={"kilogram"} onClick={from}>
            Kilogram (kg)
          </button>
          <button value={"gram"} onClick={from}>
            Gram (g)
          </button>
          <button value={"pound"} onClick={from}>
            Pound (lb)
          </button>
          <button value={"ouce"} onClick={from}>
            ouce (oz)
          </button>
          <button value={"tonne"} onClick={from}>
            tonne (ton)
          </button>
          <button value={"ton"} onClick={from}>
            {" "}
            ton (ton)
          </button>
          <button value={"carat"} onClick={from}>
            carat (ct)
          </button>
          <button value={"stone"} onClick={from}>
            stone (st)
          </button>
          <button value={"catty"} onClick={from}>
            catty (China)
          </button>{" "}
          <br></br>
          <button value={"mace"} onClick={from}>
            mace
          </button>
          <br></br>
          <button value={"tael"} onClick={from}>
            tael (China)
          </button>
          <br></br>
          <button value={"dan"} onClick={from}>
            dan (Japan){" "}
          </button>
          <br></br>
          <button value={"artel"} onClick={from}>
            artel (Arab){" "}
          </button>
          <br></br>
          <button value={"bale"} onClick={from}>
            bale (UK)
          </button>
          <button value={"deneir"} onClick={from}>
            deneir(France)
          </button>
          <br></br>
          <button value={"centner"} onClick={from}>
            centner
          </button>
          <button value={"gran"} onClick={from}>
            gran
          </button>
          <button value={"lot"} onClick={from}>
            lot (Germany)
          </button>
          <button value={"danoro"} onClick={from}>
            danoro
          </button>
          <br></br>
          <button value={"etto"} onClick={from}>
            etto
          </button>
          <br></br>
          <button value={"grano"} onClick={from}>
            grano
          </button>
          <br></br>
          <button value={"arroba"} onClick={from}>
            Arroba
          </button>
          <br></br>
          <button value={"funt"} onClick={from}>
            funt
          </button>
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
