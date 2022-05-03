import React from "react";
import "./styles.css";
import Die from "./components/Die";

export default function App() {
  //Create state to hold our array of numbers
  const [dice, setDice] = React.useState(allNewDice());

  //Map over the state numbers array to generate our array
  //of Die elements and render those in place of our
  //manually-written 10 Die elements.
  const diceElements = dice.map((die) => <Die value={die} />);

  // Generate array of 10 random numbers from 1 to 6
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <main className="App">
      <div className="die-container">{diceElements}</div>
    </main>
  );
}
