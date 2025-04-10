import { pool } from "../db/db.js";

export const getPosts = async () => {
    let query = "select * from posts";
    const { rows } = await pool.query(query);
    return rows;
}

export const createPost = async (data) => {
    const { titulo, url, descripcion } = data;
    const query = 'insert into posts (titulo, img, descripcion, likes) values ($1,$2,$3,$4)';
    const { rowCount } = await pool.query(query, [titulo, url, descripcion, 0]);
    return rowCount;
}

export const likePost = async (id) => {
    const query = "update posts set likes=likes+1 where id=$1";
    const { rowCount } = await pool.query(query,[id]);
    return rowCount;
}

export const deletePost=async(id)=>{
    const query="delete from posts where id=$1";
    const {rowCount}= await pool.query(query, [id]);
    return rowCount;
}


