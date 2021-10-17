const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const express = require("express");

app.use(express.json());

app.post("/", (req, res) => {
  if (req.headers.cpsdai_secret === "@Rejohn@Hi") {
    let name = req.body.name;
    let message = req.body.message;
    let image = req.body.image;
    io.emit("message", { name, message, image });
    return res.status(200).json({ message: "Data Received" });
  } else {
    return res.status(401).json({ message: "Unauthorized Request" });
  }
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
