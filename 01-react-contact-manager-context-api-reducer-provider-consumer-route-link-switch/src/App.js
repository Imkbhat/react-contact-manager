import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

import Header from "../src/components/layout/Header";
import About from "../src/components/pages/About";
import NotFound from "../src/components/pages/NotFound";


import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <header>
              <Header branding="Contact Manager" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
                  {/* to pass name in  params and getting it in /about page <Route exact path="/about/:name" component={About} />*/}
                </Switch>
              </div>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
