import { React, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function handlerClick() {
        setCount(count => count + 1);
        console.log(setCount);
    }

    return (
        <>
            <button onClick={handlerClick}>+</button>
            <h2>Count: {count}</h2>
        </>
    )
}

export default Counter
