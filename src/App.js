import React from 'react';
import './App.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import HomePage from './components/HomePage'
import MainRouting from './components/MainRouting'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bkcolor">
        <Router>
            <div>
                <MainRouting exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
        <Login/>
    </div>
  );
}

export default App;