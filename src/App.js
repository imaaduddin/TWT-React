import './App.css';
import SearchBar from './Components/SearchBar';
import {useState} from "react";


function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  }
  return (
    <div className="App">
      <SearchBar callback={updateData}/>
    </div>
  );
}

export default App;