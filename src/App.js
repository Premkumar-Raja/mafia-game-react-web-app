import React from 'react';
import './App.css';

function App() {
  var appName = 'WELCOME TO MAFIA GAME';
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          { appName }
        </h1>
        <img src="/homePage.jpg" alt= "home page"/>
      </header>
      
    </div>
  );
}

export default App;
