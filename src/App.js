import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from './Components/About';
import { Home } from './Components/Home';
import Navbar from './Components/Navbar'

function App() {
  return (
    <><Router>
        <Navbar/>
                
        <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/about">
              <About />
            </Route>
            
        </Switch>
      
      </Router>
    </>
  );
}

export default App;
