import React from "react";
import { useState , useEffect} from "react";

function Timer() {

    const [count, setCount] = useState(0);

     useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1);
        },1000);
        return() => {
            clearTimeout(Timer);
        };
    
    },[]);

    const HandleClick = (e) => {
        setCount(0);
    }
    return(
        <>
            <h1>Timer</h1>
            <p>Time passed: {count} seconds</p>
            <button onClick={HandleClick}>Reset Timer</button>
        </>
    )
}

export default Timer;

// This code is currently bugged