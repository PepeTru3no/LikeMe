import { Router } from "express";
import { allPosts, dltPost, lkPost, newPost } from "../controllers/posts.controller.js";
const router= new Router();

router.get("/", allPosts);
router.post("/", newPost);
router.put('/like/:id', lkPost);
router.delete('/:id', dltPost);

export default router;

