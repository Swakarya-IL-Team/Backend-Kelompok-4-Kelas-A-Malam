import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import { testConnection } from "./database/db.js";
import { notesRoutes } from "./routes/notesRoutes.js";


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json()); 
app.use('/', notesRoutes)

app.listen(process.env.APP_PORT, ()=>{
    testConnection()
    console.log(`Server berjalan di http://localhost:${process.env.APP_PORT}`)
})