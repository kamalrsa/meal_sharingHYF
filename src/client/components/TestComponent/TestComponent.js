/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./testComponentStyle.css";

export default function TestComponent() {
  const [data, setData] = useState("");
  const fetchURL = "/meals";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
    <section className="test-component">
      <p>in a component</p>
      <p> Name of Meals</p>
      <div>{data?.map((e) => e.meals_name)}</div>
    </section>
  );
}
