import React from "react";
import './App.css';
import { Card } from './components/Card';

function App() {
  const user = {
    name:"XYZ",
    bio:"Lorem Ipsum ",
    website:"www.google.com"
  }


  return (
    <div className="App">
      <Card user = {user}/>
    </div>
  );
}

export default App;

