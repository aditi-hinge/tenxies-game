import React from "react";
import "./styles.css";
import Die from "./components/Die";

export default function App() {
  // Generate array of 10 random numbers from 1 to 6
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  console.log(allNewDice());

  return (
    <main className="App">
      <div className="die-container">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={7} />
        <Die value={8} />
        <Die value={9} />
        <Die value={10} />
      </div>
    </main>
  );
}
