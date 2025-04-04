import { getPosts, createPost } from "../models/posts.model.js";

export const allPosts=async (req, res)=>{
    const posts = await getPosts();
    res.json(posts);
}

export const newPost= async (req, res)=>{
    const data= req.body;
    const answer= await createPost(data);
    let message= 'Registro creado satisfactoriamente';
    if(answer!=1)
        message='No se pudo crear el registro';
    res.json({'mensaje':message});
}

