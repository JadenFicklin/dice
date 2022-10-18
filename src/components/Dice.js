import React, { useState } from "react";

function Dice() {
  const [dieSize, setDieSize] = useState(6);
  const [number, setNumber] = useState(0);
  const [numberOfRolls, setNumberOfRolls] = useState(0);
  const [history, setHistory] = useState({});

  const rollDice = () => {
    getRandomNumber();
    addRollCount();
    trackHistory();
  };

  const getRandomNumber = () => setNumber(Math.floor(Math.random() * dieSize));
  const addRollCount = () => setNumberOfRolls(numberOfRolls + 1);
  const trackHistory = () => {
    // make a copy of history from state
    const _history = { ...history };

    // determine the roll outcome
    const roll = number + 1;

    // check to see if the number has already been rolled
    const rollExists = _history[roll];

    // if it has not been rolled, set it to one
    // if it has been rolled, take the existing value and add one
    const historyValue = rollExists ? _history[roll] + 1 : 1;

    // write the results to the object
    _history[roll] = historyValue;

    // set state
    setHistory(_history);
  };

  return (
    <>
      <div className="dice-outer">
        <h3>dice size:</h3>
        <input
          value={dieSize}
          onChange={({ target }) => setDieSize(target.value)}
        />
        <p>{dieSize}</p>
        <h3>number rolled:</h3>
        <p>{number}</p>
        <h3>amount of rolls:</h3>
        <p>{numberOfRolls}</p>
        <h3>history of rolls:</h3>
        <div className="numbers">
          {Object.entries(history).map(([roll, timesRolled]) => (
            <p>
              {roll}: {timesRolled}
            </p>
          ))}
        </div>
        <button onClick={rollDice}> get new roll</button>
      </div>
    </>
  );
}

export default Dice;
