import React, { Component } from "react";

export default class Index extends Component {
  render() {
    let { flight, sort } = this.props;
    if (sort === "date") {
      flight.sort(function (a, b) {
        return a.departs - b.departs;
      });
    }
    return (
      <div>
        <h1>Flights</h1>
        <a href="./new/">Add New Flight</a>
        <table>
          <tr>
            <th>Airline</th>
            <th>Flight No.</th>
            <th>
              <a href="./?sort=date">Departure</a>
            </th>
          </tr>
          {flight.map((e) => {
            return (
              <tr>
                <td>{e.airline}</td>
                <td>{e.flightNo}</td>
                <td
                  style={{
                    color: `${e.departs - Date.now() < 0 ? "red" : "black"}`,
                  }}
                >
                  {e?.departs?.toLocaleString?.()}
                </td>
                <td>
                  <a href={`./show/?id=${e._id}`}>Details</a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
