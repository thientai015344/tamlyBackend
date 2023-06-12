const bodyParser = require('body-parser');
const viewEngine = require('./src/config/viewEngine')
const initRoutess = require('./src/routes/pathUrl')
const connectDB = require('./src/config/connectDB');
const ChatSevice = require('./src/services/ChatSevice');
const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

let app = express();
let server = http.createServer(app);
let io = socketIo(server);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

viewEngine(app);
initRoutess(app);
connectDB();

io.on("connection", (socket) => {
  console.log("New client connected: " + socket.id);

  socket.on("sendDataClient", async function (data) {
    console.log(data)
    let message = await ChatSevice.CreateNewChat(data);
    console.log(message.message)
    if(message.message == 'ok'){
      io.emit("sendDataServer", { data });
    } 
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

let port = process.env.PORT || 4444;

server.listen(port, () => {
  console.log("Backend Node.js is running on the port: " + port);
});