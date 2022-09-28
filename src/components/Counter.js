import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="Counter">
      <p>
        מספר פריטים ברשימה:
        <span className="number-of-products">&nbsp; {props.numberOfItems}</span>
      </p>
    </div>
  );
}

export default Counter;
