import React from "react";

import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const price = parseFloat(event.target[1].value);  // Convert price to a number
    UpdateList(name, price);
  };

  const UpdateList = (name, price) => {
    const newStuff = {
      name: name,
      price: price,
    };
    setStuffs((prevStuffs) => [...prevStuffs, newStuff]);
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm handleSubmit={handleSubmit} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
