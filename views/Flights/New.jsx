import React, { Component } from "react";

export default class New extends Component {
  render() {
    let date = new Date();
    console.log(date);
    date.setFullYear(date.getFullYear() + 1);
    return (
      <div>
        <h1>New Flight</h1>
        <a href="../">Index</a>
        <form action="/flights/" method="POST">
          <br />
          <label htmlFor="Airline">Airline</label>
          <br />
          <input type="text" name="airline" />
          <br />
          <label htmlFor="flightNo">Flight Number</label>
          <br />
          <input type="text" name="flightNo" />
          <br />
          <span>Default Departure at {date.toLocaleString()}</span>
          <br />
          <input
            type="datetime-local"
            name="departs"
            //value={date.toISOString().slice(0, 19)}
          />
          <br />
          <label htmlFor="airport">Airport</label>
          <br />
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
