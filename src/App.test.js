jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
dotenv = require("dotenv").config();
const axios = require("axios");
axios.defaults.headers.common["Authorization"] = `Bearer ${
  process.env.REACT_APP_AUTH_TOKEN
}`;

//This testing suite is testing the data coming from our original server that hit several endpoints from the LMS API. We are hoping to upgrade.
describe("receiving data from server", () => {
  //this first test takes a VERY long time to run - about 20s. Thank you for your patience, or for at least not breaking the computer. If you break the computer, then please disregard this message and go see an anger management counselor. Dr. Brusitowitz is usually available.
  test("should receive an object from endpoint /sorting", async () => {
    expect.assertions(3);

    let response = await axios.get("http://localhost:3030/sorting");

    // console.log("response", response.data);

    expect(typeof response.data).toBe("object");
    expect(Object.keys(response.data).length).not.toBe(0);
    expect(Object.keys(response.data).includes("react")).toBeTruthy();
  });

  test("should receive an array of objects", async () => {
    expect.assertions(2);

    let response = await axios.get("http://localhost:3030/api/getComp");

    expect(Array.isArray(response.data["outcome_results"])).toBeTruthy();
    expect(response.data["outcome_results"].length).not.toBe(0);
  });
});
