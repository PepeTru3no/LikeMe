import { getPosts, createPost, likePost, deletePost } from "../models/posts.model.js";

export const allPosts = async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
}

export const newPost = async (req, res) => {
    const data = req.body;
    try {
        await createPost(data);
        let message = 'Registro creado satisfactoriamente';
        res.json({ 'mensaje': message }).status(201);
    } catch (error) {
        const { code } = error;
        if (code == "23502") {
            res.send('violacion de campo nulo').status(400);
        } else {
            res.json(error).status(500);
        }
    }

}


export const lkPost = async (req, res) => {
    const { id } = req.params;
    try {
        const answer=await likePost(id);
        let message = 'Like agregado';
        if(answer==0)
            message='EL registro no existe'
        res.json({ 'mensaje': message }).status(201);
    } catch (error) {
        res.json(error)
    }
}

export const dltPost = async (req, res) => {
    const { id } = req.params;
    try {
        const answer = await deletePost(id);
        let message = 'Post eliminado';
        if(answer==0)
            message='EL registro no existe'
        res.json({ 'mensaje': message }).status(200);
    } catch (error) {
        res.json(error).status(500);
    }
}

