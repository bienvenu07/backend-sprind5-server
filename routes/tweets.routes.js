import { Router } from "express";
import {getTweets} from "../controller/tweets.controllers.js";
import {postTweets} from "../controller/tweets.controllers.js";

const tweetsRoute = Router();

tweetsRoute.get("/tweets", getTweets)
tweetsRoute.post("/tweets", postTweets)

export default tweetsRoute
