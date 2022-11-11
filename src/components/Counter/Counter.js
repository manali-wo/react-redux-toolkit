import React, { useState } from 'react';

import './Counter.css';
import { useCounterFacade } from "../../data-access/Counter";

export const Counter = () => {

  // Facades
  const { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, incrementIfEven, value } = useCounterFacade();

  // States
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className="value">{value}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className="button asyncButton"
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className="button"
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
        <button
            className="button"
            onClick={() => incrementIfEven(incrementValue)}
        >
          Add If Even
        </button>
      </div>
    </div>
  );
}
