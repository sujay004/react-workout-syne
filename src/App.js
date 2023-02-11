import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let user ={firstName:'sujay'};
  let paraEl = <p>Sujay paragraph testing</p>;
  return (

    <div className="App">
      <p>{user.firstName.toUpperCase()}</p>
      <p>Sum: {12+12}</p>
      {paraEl}
    </div>
 //This is jsx syntax

  );
}

export default App;
   // React.createElement('div',{},
    // React.createElement('h1',{},'Functional componenet'))
     //This is js syntax it will be complicated when we have so much elements