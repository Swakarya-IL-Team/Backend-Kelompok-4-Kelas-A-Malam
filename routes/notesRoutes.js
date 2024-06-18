import express from "express";
import { addNewNote} from "../controller/notesController.js";

export const notesRoutes = express.Router();
notesRoutes.post('/addNewNote', addNewNote);
