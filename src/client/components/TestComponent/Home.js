import React from "react";
import img from "./../../assets/images/meal1.png";
//import logo from "./../assets/images/hyf.png";

export default function Home() {
  return (
    <div>
      <style>{"body { background-color:  #D8BFD8; }"}</style>
      <div>
        <p className="mealName">
          Meal_Sharing APP is a open platform Application Where you can add your
          Meal with price and description without any cost. Customer will make
          reservation and reviews about your meal. Enjoy here by adding your
          meal. <br></br> <br></br>
          <img src={img} alt height="400" width="600"></img>
        </p>
      </div>
      <div></div>
    </div>
  );
}
