import React from 'react';
import { AngleDown, AngleUp } from "../../assets/imagesFinal";

const Counter = ({ value, onChange, what }) => {
  function increment(what) {
    return value.clone().add(1, what);
  }
  function decrement(what) {
    return value.clone().subtract(1, what);
  }
  return (<div className="counter">
    <div className="btn" onClick={() => onChange(increment(what))}><AngleUp /></div>
    <div className="counter-text">{value.format(what)}</div>
    <div className="btn" onClick={() => onChange(decrement(what))}><AngleDown /></div>
  </div>);
};

export default Counter;