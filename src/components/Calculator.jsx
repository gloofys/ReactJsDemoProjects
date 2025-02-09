import {useState} from "react";
import "../styleCalculator.css"

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");


    const display = (value) => setInputValue(inputValue+value);
    const calculate = () => setInputValue(eval(inputValue));
    // Using eval() like this can be dangerous and is generally not recommended because it can execute arbitrary code, posing a security risk—especially if the input comes from users.
    //
    // Why eval() is risky:
    // Security: If someone enters something malicious like alert('Hacked!') or worse, it will execute.
    // Debugging: It can make the code harder to debug and maintain.
    // Performance: eval() can slow down your code because it forces the JavaScript engine to switch to an interpreter mode


    const clear = () => setInputValue("");
    return <form className="calculator" name="calc">
        <input
            type="text"
            className="value"
            value={inputValue}
        />
        <span className="num clear" onClick={() => clear()}>
    c
</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>+</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
            =
        </span>


    </form>
}
export default Calculator
