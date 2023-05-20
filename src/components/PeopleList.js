import React from 'react';
import People from './People';

const PeopleList = () => {
    const PeopleArr = People.map((Person) =>
    <li key={Person.id}> <h1>Hey I'm {Person.name}. My skill is {Person.skill}.</h1></li>
    );

    return <ul>{PeopleArr}</ul>
}

export default PeopleList;