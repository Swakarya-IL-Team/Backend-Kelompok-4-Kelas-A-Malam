import express from "express";
import { addNewNote, getAllNotes, getNoteById, updateNoteById, deleteAllNotes, deleteNoteById } from "../controller/notesController.js";

export const notesRoutes = express.Router();
notesRoutes.post('/addNewNote', addNewNote);
notesRoutes.get('/getAllNotes', getAllNotes);
notesRoutes.get('/getNote/:id', getNoteById);
notesRoutes.delete('/deleteAllNotes', deleteAllNotes);
notesRoutes.delete('/deleteNote/:id', deleteNoteById);

notesRoutes.put('/updateNote/:id', updateNoteById);