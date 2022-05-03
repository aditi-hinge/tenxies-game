import React from "react";
import "../styles.css";

export default function Die(prop) {
  const styles = {
    backgroundColor: prop.isHeld ? "#59E391" : "white"
  };
  return (
    <div className="die-face" style={styles}>
      <h2 className="die-font">{prop.value}</h2>
    </div>
  );
}
