import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    
    const increment = () => {
        setCounter(curr => {
            return curr + 1
        })
    }

    const decrement = () => {
        if (counter >0)
        setCounter(curr => {
            return curr - 1
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter