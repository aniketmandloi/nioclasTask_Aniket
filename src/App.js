// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';
import FinishPage from './components/FinishPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Mathematics Test App</h1>
        </header>
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/finish" component={FinishPage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
