import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const flight = this.props.flight;
    console.log("there", flight);
    const airports = ["AUS", "DAL", "LAX", "SAN", "SEA"];
    const usedAirports = [
      flight.airport,
      ...flight.destinations.map((e) => e.airport),
    ];
    console.log("used", usedAirports);
    return (
      <div>
        <h1>Details</h1>
        <a href="../">Index</a>
        <table>
          <tr>
            <td>Airport : </td>
            <td>{flight.airport}</td>
          </tr>
          <tr>
            <td>Airline : </td>
            <td>{flight.airline}</td>
          </tr>
          <tr>
            <td>Flight# : </td>
            <td>{flight.flightNo}</td>
          </tr>
          <tr>
            <td>departs : </td>
            <td>{flight?.departs?.toLocaleString?.()}</td>
          </tr>
        </table>
        <form action={`/flights/addDestination/${flight._id}/`} method="POST">
          <label htmlFor="Airline">Airline: </label>
          <select name="airport">
            {airports.map((e) => {
              return usedAirports.find((target) => target === e) ? undefined : (
                <option value={e}>{e}</option>
              );
            })}
          </select>
          <br />
          <label htmlFor="Airline">Arrival Time</label>
          <br />
          <input
            type="datetime-local"
            name="departs"
            //value={date.toISOString().slice(0, 19)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <table>
          <tr>
            <td>Airport</td>
            <td>Arrival Date</td>
          </tr>
          {flight.destinations.map((e) => {
            console.log(e);
            if (e.airport === undefined) return undefined;
            return (
              <>
                <tr>
                  <td>{e.airport}</td>
                  <td>{e?.arrival?.toLocaleString?.()}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    );
  }
}
