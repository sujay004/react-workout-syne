import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <h1>Sujay</h1>
    // </div>
    React.createElement('div',{},
    React.createElement('h1',{},'Functional componenet'))
  );
}

export default App;
