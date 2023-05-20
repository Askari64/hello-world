import React from "react";
import Coffee from './Coffee'

const CoffeeList = () => {
  const coffeeList = Coffee.map((coffee) => 
    <li key={coffee.id}>
      <p>We serve {coffee.name}</p>
    </li>
  );

  return <ul>{coffeeList}</ul>;
};

export default CoffeeList