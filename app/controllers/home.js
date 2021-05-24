import Curso from "../models/Curso.js"
import {login} from "../../config/auth.js"
import User from "../models/User.js"

/* var cursos =[
    {nome: "Bolinho", categoria: "salgado"},
    {nome: "Coxinha", categoria: "salgado"},
    {nome: "Risole", categoria: "salgadin"},
    {nome: "Kibe", categoria: "salgadin"}
]  */

export default (()=>{ 
    var controller ={
        index: (req, res)=>{
            Curso.find({}, [], {sort: {nome:1}}).exec().then(cursos =>{
                res.render("index", {cursos})
            })
        },
        newItem: (req, res)=>{
            let newCurso = req.body;
                    
            let curso = Curso.create(newCurso)

            res.json(curso);
        },
        removeItem: (req, res) =>{
            let _id = req.params.id;
            Curso.findByIdAndDelete(_id,  err=>{
                if(!err){
                    res.json({message: `sucesso`});
                }else{
                    res.status(500).end();
                } 
            })
        },
         login: (req, res)=>{
            let {name, password} = req.body;

            login(name, password, (result)=>{
                if(result){
                    res.json(result);
                }else{
                    res.status(401).json({message: "usuario ou senha invalido!"})
                }
            })
        }
     }
    return controller 
})()