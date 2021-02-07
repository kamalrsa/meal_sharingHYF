import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand bg-primary fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to="#">
            MealSharingApp
          </NavLink>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="./home">
                  <span className="fa fa-info"></span>Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./meal-display">
                  <span className="fa fa-info fa-lg"></span>Meal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="add-meal">
                  <span className="fa fa-address-card fa-lg"></span>AddMeal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="reservation">
                  <span className="fa fa-address-card fa-lg"></span>
                  ViewReservation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="give-reviews">
                  <span className="fa fa-address-card fa-lg"></span>GiveReview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./contact">
                  <span className="fa fa-address-card fa-lg"></span>Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
