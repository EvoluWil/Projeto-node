import app from "./config/express.js";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://onmnistack9:1234@omnistack9.bru91.mongodb.net/NodeExpress",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.listen(app.get("port"), ()=>{
    console.log(`localhost ${app.get("port")}`);
    mongoose.connection.on("connected", ()=>{
        console.log("BD On")
    })
})