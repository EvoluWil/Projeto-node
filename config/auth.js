import passport  from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
import User from "../app/models/User.js"


var ExtractJWT = passportJWT.ExtractJwt,
    JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "MinhaChaveSecreta"
}

    export default (function auth(){
        //var User = mongoose.models.User;
        var strategy = new JwtStrategy(jwtOptions, (jwt_payload, next)=>{
            User.findById(jwt_payload._id).exec().then(user => {
                if(user){
                    next(null, user);
                }else{
                    next(null, false);
                }
            })
        })
        passport.use(strategy);
        return {
            initialize:()=>{
                return passport.initialize();
            },
            get authenticate(){
                return passport.authenticate("jwt", {session: false});
            }
        }
    })();
    export async function login(name, password, callback) {
        //var User = mongoose.model.User;
       await User.findOne({name, password}).exec().then(user => {
            if(user){
                var payload = {_id: user._id};
                var token = jwt.sign(payload, jwtOptions.secretOrKey);
                callback({"message": "ok", token})
            }else{
                callback(false);
            }
        })
    };  

