import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routers/product";

const app = express();

// midlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api', productRouter)
// Ket noi sever
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running is port ${PORT}`);
});

//ket no data base
mongoose.connect('mongodb://localhost:27017/asmType',()=>{
    console.log('Ket noi data base thanh cong')
});