// src/App.tsx

import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Operations with Zustand</h1>
        <AddItem />
        <ItemList />
      </header>
    </div>
  );
};

export default App;
