import express from "express";
import { getAllNotes } from "../controller/notesController.js";

export const notesRoutes = express.Router();
notesRoutes.get('/getAllNotes', getAllNotes)