import { useState } from "react";
const UseState = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>This is and useState</h1>
            <p>      {count}</p>
            <button onClick={() => increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}
export default UseState;