const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const socketIo = require("socket.io");
const Http = require("http");
const http = Http.Server(app);
const io = socketIo(http, { path: "/socket.io" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

io.on("connection", (socket) => {});

http.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
