import logo from './logo.svg';
import './App.css';
import React from 'react';
import Expenses from './Components/Expenses/Expenses';

function App() {
  let user ={firstName:'sujay'};
  let paraEl = <p>Sujay paragraph testing</p>;
  return (
    <React.Fragment>
      <Expenses></Expenses>
    </React.Fragment>
 //This is jsx syntax

  );
}

export default App;
   // React.createElement('div',{},
    // React.createElement('h1',{},'Functional componenet'))
     //This is js syntax it will be complicated when we have so much elements