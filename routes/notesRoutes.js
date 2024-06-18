import express from "express";
import { addNewNote, getAllNotes, getNoteById, updateNoteById} from "../controller/notesController.js";

export const notesRoutes = express.Router();
notesRoutes.post('/addNewNote', addNewNote);
notesRoutes.get('/getAllNotes', getAllNotes);
notesRoutes.get('/getNote/:id', getNoteById);

notesRoutes.put('/updateNote/:id', updateNoteById);