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

// menampilkan semua notes
export async function getAllNotes(req,res) {
    try {
        const result = await query('SELECT * FROM notes');
        return res.status(200).json({status: "Berhasil", data:result})
    } catch(e) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

// menampilkan salah satu notes
export async function getNoteById(req, res) {
    const { id } = req.params;
    try {
        const notes = await query('SELECT * FROM notes WHERE id = ?', [id]);
        if (notes.length > 0) {
            return res.status(200).json(notes[0]);
        } else {
            return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        }
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

// mengubah notes (judul, tanggal, dan catatan)
export async function updateNoteById(req, res) {
    const { id } = req.params;
    const { title, datetime, note } = req.body;

    try {
        const result = await query('UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?', [title, datetime, note, id]);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Berhasil mengupdate catatan" });
        } else {
            return res.status(404).json({ msg: "Catatan tidak ditemukan" });
        }
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}
