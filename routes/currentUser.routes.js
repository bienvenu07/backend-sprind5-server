import { Router } from "express";
import {getCurrentUser} from "../controller/user.controllers.js";


const currentUserRoute = Router()

currentUserRoute.get("/current-user", getCurrentUser);

export default currentUserRoute
