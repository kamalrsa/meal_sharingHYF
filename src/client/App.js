import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealDisplay from "./components/TestComponent/MealDisplay";
import "./App.css";
import "./index.css";
import { AddMeal } from "./components/TestComponent/AddMeal";
import ViewReservation from "./components/TestComponent/ViewReservation";
import Navbar from "./components/TestComponent/Navbar";
import { Reservation } from "./components/TestComponent/Reservation";
import TotalReview from "./components/TestComponent/TotalReview";
import { Review } from "./components/TestComponent/Review";
import Home from "./components/TestComponent/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/add-meal">
          <AddMeal></AddMeal>
        </Route>
        <Route exact path="/reservation">
          <ViewReservation></ViewReservation>
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
        <Route exact path="/meal-display">
          <MealDisplay></MealDisplay>
        </Route>
        <Route exact path="/total-reviews">
          <TotalReview></TotalReview>
        </Route>

        <Route exact path="/meal-display/:id">
          <Reservation></Reservation>
        </Route>
        <Route exact path="/total-reviews/:id">
          <Review></Review>
        </Route>
      </Router>
    </>
  );
}

export default App;
