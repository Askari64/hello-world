import React from 'react';
import Cars from './Cars'

const Carlist = () => {
    const CariLike = Cars.map((Car) => 
    <li key={Car.id}> <h1>I love {Car.name}</h1></li>);
    return <ol>{CariLike}</ol>
}

export default Carlist;