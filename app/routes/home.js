import express from "express";
import controller from "../controllers/home.js";
import auth from "../../config/auth.js";

export var routes = express.Router()

export default (()=>{

    routes.get("/", controller.index);
    routes.post("/", auth.authenticate , controller.newItem);
    routes.delete("/remove/:id", auth.authenticate , controller.removeItem);
    routes.post("/login", controller.login);

})()



