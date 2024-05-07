import { Router } from "express";

const tweetsRoute = Router();
tweetsRoute.get("/",getterAllthing)

export default tweetsRoute