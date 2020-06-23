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
            <img src="../logo.svg" width="40" height="40" />
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
        <section className="homepage-content">
          <div className="row">
            <div className="col-md-4">
              <h2>Lorem Ipsum</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-md-4">
              <h2>Lorem Ipsum</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-md-4">
              <h2>Lorem Ipsum</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </section>
        <section className="homepage-footer">
          <div className="row">
            <div className="col-md-6">Contactgegevens</div>
            <div className="col-md-6">Andere info</div>
          </div>
        </section>
      </div>
    </div> 

  );
}

export default App;
