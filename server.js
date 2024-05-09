import express from "express";
import cors from "cors";
import currentUserRoute from "./routes/currentUser.routes.js";
import tweetsRoute from "./routes/tweets.routes.js";


const server = express()
const PORT =5000;

server.use(express.json());
server.use(cors());

server.use("/", currentUserRoute);
server.use("/", tweetsRoute);

server.use(express.json());

server.listen(PORT,()=>
console.log(`le serveur fonctionne sur : http://localhost:${PORT}`))


