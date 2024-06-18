import { query } from "../database/db.js";

export async function getAllNotes(req,res) {
    try {
        const result = await query('SELECT * FROM notes');
        return res.status(200).json({status: "Berhasil", data:result})
    } catch(e) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}