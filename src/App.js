import React, { Component } from "react";
import "./styles.css";

export default class Calc extends Component {
  state = {
    n1: null,
    n2: null,
    result: ""
  };

  handleChangeOne = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChangeTwo = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  mult = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 * n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  dividir = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 / n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  subtrair = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 - n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  somar = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 + n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  clear = () => {
    let { n1, n2, result } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: 0,
        n1: "",
        n2: ""
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  render() {
    let { n1, n2, result } = this.state;
    let {
      handleChangeOne,
      handleChangeTwo,
      mult,
      dividir,
      subtrair,
      somar,
      clear
    } = this;
    return (
      <div className="calcs">
        {console.log(n1, n2, result)}
        <h1>React App Calc</h1>
        <h2>{result}</h2>
        <div className="inputs">
          <input value={n1} onChange={handleChangeOne} type="number" />
          <input value={n2} onChange={handleChangeTwo} type="number" />
        </div>
        <div className="btn">
          <button onClick={mult}>*</button>
          <button onClick={dividir}>/</button>
          <button onClick={subtrair}>-</button>
          <button onClick={somar}>+</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
    );
  }
}
