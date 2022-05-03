import React from "react";
import "./styles.css";
import Die from "./components/Die";
import uniqid from "uniqid";

export default function App() {
  //Create state to hold our array of numbers
  const [dice, setDice] = React.useState(allNewDice());

  //Map over the state numbers array to generate our array
  //of Die elements and render those in place of our
  //manually-written 10 Die elements.
  const diceElements = dice.map((die) => (
    <Die id={die.id} value={die.value} isHeld={die.isHeld} />
  ));

  // Generate array of 10 random numbers from 1 to 6
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: uniqid()
      });
    }
    return newDice;
  }

  // create new dice after clicking the roll button

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main className="App">
      <div className="die-container">{diceElements}</div>
      <button className="roll-dice-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
