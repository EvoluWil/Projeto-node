import mongoose from "mongoose";

    const  CursoSchema = new mongoose.Schema({
        nome: {
            type: String,
            required: true,
            index:{
                unique: true
            }
            
        },
        categoria: {
            type: String,
            required: true
        }

        
    })
export default mongoose.model("Curso", CursoSchema, "cursos");
