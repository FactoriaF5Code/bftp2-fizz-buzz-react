import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(function(){

        if (counter === 0) {
            setMessage("Haz click para empezar a contar");
            return;
        }

        if (counter % 3 === 0 && counter % 5 === 0) {
            setMessage("FizzBuzz");
        } else if (counter % 3 === 0) {
            setMessage("Fizz");
        } else if (counter % 5 === 0) {
            setMessage("Buzz")
        } else {
            setMessage(counter);
        }
    }, [counter])

    function incrementCounter() {
        setCounter(counter+1);
    }


    return (
        <div className="App">
            <h2>Fizz Buzz</h2>
            <button onClick={incrementCounter}>Click me!</button>
            <div className="message">{message}</div>
        </div>
    );
}

export default App;
