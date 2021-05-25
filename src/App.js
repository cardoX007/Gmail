import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar";
import EmailList from "./EmailList"
import Mail from "./Mail"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
       <Header/> 
       <div className="app__body">

       <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
       </div>
      </Router>
     
     
    </div>
  );
}

export default App;
