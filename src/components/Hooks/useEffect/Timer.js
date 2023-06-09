import { useState , useEffect} from "react";

function Timer() {

    const [count, setCount] = useState(0); // state which stores number of seconds and setter function

     useEffect(() => {    
        const timer = setTimeout(() => {  // created timer var to store setTimeout() 
            setCount((count) => count+1);
        },1000);
        return() => {
            clearTimeout(timer);  // clearTimeout(timer) to unmount and to prevent memory leaks. (This wont work cuz there is no stop condition at the moment)
        };   
    
    },[count]); // effect runs every second because count updates every second

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