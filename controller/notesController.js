import { query } from "../database/db.js";

// membuat notes baru
export async function addNewNote(req, res) {
    const { title, datetime, note } = req.body;
    try {
        await query ('INSERT INTO notes(title, datetime, note) VALUES (?, ?, ?)',[title, datetime, note]);
        return res.status(200).json({message:"Berhasil Menambahkan Note Baru"})
    } catch (error) {
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

