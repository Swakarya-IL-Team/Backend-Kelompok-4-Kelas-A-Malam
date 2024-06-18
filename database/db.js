import mysql2 from 'mysql2/promise';
import 'dotenv/config'

export const db = mysql2.createPool(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
);

export const testConnection = async() => {
    try {
        await db.getConnection()
        console.log("Koneksi Berhasil")
    }catch(e) {
        console.log("Koneksi Gagal")
    }
}

export const query = async (query, values) => {
    try {
        const [result] = await db.query(query, values || []);
        return result;
    } catch (error) {
        console.error("Query failed:", error);
        throw error; // Melempar kesalahan agar bisa ditangani oleh pemanggil fungsi ini
    }
}