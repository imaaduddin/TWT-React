import './App.css';
import SearchBar from './Components/SearchBar';
import {useState, useEffect} from "react";
import AddItem from './Components/AddItem';
import ItemsDisplay from './Components/ItemsDisplay';
import Test from './Components/Class';
import { response } from 'express';
// import styled from 'styled-components';

// const Title = styled.h1`color: ${(props) => props.color ? props.color : "black"};` 

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []})
  const [showTest, setShowTest] = useState(true);

  useEffect(() => {
    console.log("use effect");

    return() => {
      console.log("cleanup");
    }
  }, [data, filters]);

  useEffect(() => {
    console.log("second use effect");
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/items")
     .then((resposne) => response.json)
     .then((data) => setData(data));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemTodata = (item) => {
    let items = data["items"];
    item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({items: items})
      });
  }

  const filterData = (data) => {
    const filteredData = [];

    if (filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  }

  return (
    <div className="container">
      {/* <Title color="red">Testing</Title> */}
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])}/>
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}/>
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemTodata}/>
      </div>
      {showTest ? <Test destroy={setShowTest}/> : null}
    </div>
  );
}

export default App;