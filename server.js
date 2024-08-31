require("dotenv").config();

const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const ejs = require("ejs");
const { Socket } = require("node:dgram");

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT;

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200);
  res.render("index");
})

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})