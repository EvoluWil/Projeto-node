import express from "express";
import { routes } from "../app/routes/home.js"
import auth from "./auth.js"


export default (()=>{
    var app=express();
    
    app.use(auth.initialize());
    app.set("port", process.env.port);
    
    app.use(express.static("./public"));
    app.use(express.json());
    app.use(routes)

    app.set("view engine", "ejs");
    app.set("views", "./app/views");



    return app;
})();