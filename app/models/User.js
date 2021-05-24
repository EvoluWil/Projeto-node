import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index:{
            unique: true
        }
    },
    password:{
        type: String,
        required: true
    }
})
export default mongoose.model("User", UserSchema, "users");
