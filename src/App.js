import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function Info() {
  const title = "This is my title.";
  const showTitle = true;

  return (
    <div>
      <h1>{showTitle ? title : ""}</h1>
      <h1>Inventory System</h1>
      <p>Manage your stuff.</p>
    </div>
  )
}

function AddItem() {
  return (
    <div>
      <label for="text-form">Type something:</label>
      <input type="text" id="text-form"/>
    </div>
  )
}

export default App;
