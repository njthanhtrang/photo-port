// import React in every component file
import React from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import './App.css';

// JSX
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
