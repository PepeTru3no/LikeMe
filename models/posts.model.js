import { pool } from "../db/db.js";

export const getPosts = async () => {
    let query = "select * from posts";
    const { rows } = await pool.query(query);
    return rows;
}

export const createPost = async (data) => {
    const { titulo, url, descripcion } = data;
    let likes=5;
    const query = 'insert into posts (titulo, img, descripcion, likes) values ($1,$2,$3,$4)';
    const { rowCount } = await pool.query(query, [titulo, url, descripcion, likes]);
    return rowCount;
}
