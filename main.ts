import express from "express";
import cookieParser from "cookie-parser";

const server = express();
server.use(cookieParser());
server.use(express.json());


server.listen(3000, () => console.log("444 Serveur démarré 444"));