import React from 'react';
import './App.css';
import KommunicateChat from './chat';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
       <KommunicateChat/>   
        
        <nav class="navbar">
          <a class="navbar-brand">
            <img src="../logo.png" width="40" height="40" />
          </a>
        </nav>
                <section className="col-12 homepage-header justify-content-center">
          <div className="spotlight-holder">
            <div className="spotlight-content">
              <div className="main-text"></div>
              <h1>HLB helpt u uw doelen te realiseren</h1>
              <div className="sub-text">
                <h2>Hoe kunnen we u helpen?</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> 

  );
}

export default App;
