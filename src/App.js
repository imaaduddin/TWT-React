import './App.css';
import SearchBar from './Components/SearchBar';
import {useState} from "react";
import AddItem from './Components/AddItem';
import ItemsDisplay from './Components/ItemsDisplay';
// import styled from 'styled-components';

// const Title = styled.h1`color: ${(props) => props.color ? props.color : "black"};` 

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []})

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemTodata = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items})
  }

  return (
    <div className="container">
      {/* <Title color="red">Testing</Title> */}
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]}/>
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}/>
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemTodata}/>
      </div>
      {/* <p>Name: {"name" in data ? data["name"] : "No data to display"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No data to display"}</p>
      <p>Type: {"type" in data ? data["type"] : "No data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No data to display"}</p> */}
    </div>
  );
}

export default App;