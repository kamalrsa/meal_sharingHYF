import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand bg-primary fixed-top">
        <a className="navbar-brand" href="#">
          MealSharingApp
        </a>
        <div className="collapse navbar-collapse" id="Navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./meal-display">
                Meal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="add-meal">
                AddMeal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reservation">
                ViewReservation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="give-reviews">
                GiveReview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
