import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealDisplay from "./components/TestComponent/MealDisplay";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>test</p>
      </Route>
      <Route exact path="/lol">
        <p>lol</p>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
      <Route exact path="/meal-display">
        <MealDisplay></MealDisplay>
      </Route>
    </Router>
  );
}

export default App;
