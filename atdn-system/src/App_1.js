import React, { Component } from "react";
import WOW from "wowjs";
import socketIOClient from "socket.io-client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "./App.css";
import Home from "./components/home/Home";
import Employee from "./components/employee/Employee";

let socket;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      socketPoint: "http://localhost:4000/",
    };

    socket = socketIOClient(this.state.socketPoint);
  }

  componentDidMount() {
    socket.emit("message", ({ name, message }) => {
      console.log(name, "mmmmmm", message);
    });

    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <>
        <Home />
        {/* <Employee /> */}
      </>
    );
  }
}

export default App;
