import { useState } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    return (
        <div>
            <h2>카운터: {counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
