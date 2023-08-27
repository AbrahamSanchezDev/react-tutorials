import React from "react";

function Calculator() {
  React.useState();
  function handleNumber(value) {
    alert("handle number click:" + value);
  }
  function handleOperator(value) {}
  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">0</div>
        <CalcButton value="7" onClick={handleNumber} />
        <CalcButton value="8" onClick={handleNumber} />
        <CalcButton value="9" onClick={handleNumber} />
        <CalcButton className="operator" value="/" onClick={handleOperator} />

        <CalcButton value="4" onClick={handleNumber} />
        <CalcButton value="5" onClick={handleNumber} />
        <CalcButton value="6" onClick={handleNumber} />
        <CalcButton className="operator" value="*" onClick={handleOperator} />

        <CalcButton value="1" onClick={handleNumber} />
        <CalcButton value="2" onClick={handleNumber} />
        <CalcButton value="3" onClick={handleNumber} />
        <CalcButton className="operator" value="-" onClick={handleOperator} />

        <CalcButton value="C" onClick={handleNumber} />
        <CalcButton value="0" onClick={handleNumber} />
        <CalcButton value="=" onClick={handleNumber} />
        <CalcButton className="operator" value="+" onClick={handleOperator} />
      </div>
    </div>
  );
}

function CalcButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}

export default Calculator;
// ReactDOM.render(
//   <div className="app-container">
//     <Calculator />
//   </div>,
//   document.getElementById("root")
// );
