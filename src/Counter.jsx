import React, {useState} from "react";

// function Counter() { bla bla }
const Counter = () => { 
    const [count, setCount] =  useState(0); //React.useState(0);
        
    const handleDecrement = () => {
        if (count == 0) { return; }
        setCount(count -1);
    };

    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    )
};

export default Counter;



