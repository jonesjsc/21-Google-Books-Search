import React from "react";
import "./App.css";
// import GoogleBooksSearch from "./components/googleBooksSearch";
import Header from "./components/Header";
import Books from "./components/Books";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Books></Books>
    </div>
  );
}

export default App;
