import React, { useState } from 'react';


const Counter = () => {
  const [counter, setCounter]  = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={increaseCounter}>Click Me</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}
export default Counter;