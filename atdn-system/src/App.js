import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
// import WOW from "wowjs";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./components/home/Home";
import Employee from "./components/employee/Employee";

// new WOW().init();

function App() {
  const [employee, setEmployee] = useState({
    name: "",
    message: "",
    image: "",
  });
  const [showEmployee, setShowEmployee] = useState(false);
  const [timeInterval, setTimeInterval] = useState(false);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("message", ({ name, message, image }) => {
      setEmployee({ name, message, image });
      setShowEmployee(true);
      setTimeInterval(true);
    });
    return () => socketRef.current.disconnect();
  }, []);

  if (timeInterval) {
    setTimeout(function () {
      setTimeInterval(false);
      setShowEmployee(false);
      setEmployee({
        name: "",
        message: "",
        image: "",
      });
      window.location.reload(true);
    }, 10000);
  }
  return <>{showEmployee ? <Employee employeeInfo={employee} /> : <Home />}</>;
}

export default App;
