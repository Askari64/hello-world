import React, {useState} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent() {

    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(50000);

    const incrementAge = () => {
        setAge(age => age + 1);
    }

    const incrementSalary = () => {
        setSalary(salary => salary + 1000);
    }


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