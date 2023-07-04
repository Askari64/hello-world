import React, {useState} from 'react'

function CounterMemo() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const increaseOne = () => {
        setCountOne(countOne => countOne + 1);
    }

    const increaseTwo = () => {
        setCountTwo(countTwo => countTwo + 2);
    }

    const isEven = () => {
        let i= 0;
        while (i< 999999999) { // to make calculation expensive
            i++
        };
        return countOne % 2 === 0;
    }
    

  return (
    <>
    <button onClick={increaseOne}>Increase One - {countOne}</button>
    <span>{isEven()?'Even':'Odd'}</span>
    <br/>
    <button onClick={increaseTwo}>Increase Two - {countTwo}</button>
    </>
  )
}

export default CounterMemo