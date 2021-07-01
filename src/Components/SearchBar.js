import React from "react";
import {useState} from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    console.log(name);
    console.log(price);
    console.log(type);
    console.log(brand);
  }

  return (
    <div>
      <h2>Search for and item</h2>
      <form>
        <label for="name-field">Name:</label>
        <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label for="price-field">Max Price:</label>
        <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <label for="type-field">Type:</label>
        <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
        <label for="brand-field">Brand:</label>
        <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
        <button type="button" onClick={searchButtonPressed}>Search</button>
      </form>
      <p>Name: {name}</p>
      <p>Max Price: {price}</p>
      <p>Type: {type}</p>
      <p>Brand: {brand}</p>
    </div>
  )
}

export default SearchBar;