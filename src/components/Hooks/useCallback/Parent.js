import React, {useCallback, useState} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent() {

    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age => age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary => salary + 1000);
    },[salary]);


  return (
    <>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>Increase Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increase Salary</Button>
    </>
    

  )
}

export default Parent