const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io"); // Use uppercase Server for consistency
const cors = require("cors");

app.use(cors(corsOptions));


const server = http.createServer(app);

const io = new Server(server, {  // Use uppercase Server here too
  cors: {
    origin: "https://iota-amber.vercel.app/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket)=>{
    console.log(`user connected ${socket.id}`);

    socket.on("send_message", (data)=>{
      socket.broadcast.emit("receive_message", data)
      console.log(data.message);
    });

    socket.on("join_room", (payload)=>{
      socket.join(payload)
      console.log(`User with ID : ${socket.id} joined room : ${payload}`);
    })
    
    socket.on("join_new_room", (payload)=>{
      socket.join(payload)
      console.log(`User with ID : ${socket.id} joined new room with ID : ${payload}`);
    })

    socket.on("disconnect", ()=>{
      console.log("user disconnected", socket.id);
    })
});

server.listen(3001, () => {
  console.log("Server up and running");
});
