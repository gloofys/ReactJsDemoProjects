import {useState} from 'react'
import "../styleCounter.css"


const Counter = () => {
    const[count,setCount]=useState(0)

    const increment =() => setCount(count + 1)
    const decrement =() => setCount(count - 1)

    return <div className="container">Counter
    <div>
        <h1 className="number">{count}</h1>
    </div>

        <div className="btns-container"></div>
            <button onClick={increment} className="increment">+</button>
            <button onClick={decrement} className="increment">-</button>

    </div>
}
export default Counter
