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

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200);
  res.render("index");
})

app.get("/menu", (req, res) => {
  res.status(200);
  res.render("menu")
})

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("place-order", () => {
    socket.emit("redirect", "/menu");
  })

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

