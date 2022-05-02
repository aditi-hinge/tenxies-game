import React from "react";
import "../styles.css";

export default function Die(prop) {
  return (
    <div className="die-face">
      <h2 className="die-font">{prop.value}</h2>
    </div>
  );
}
