import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About } from "./Components/About";
import Alert from "./Components/Alert";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message = "Alert while encounter changes"/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
