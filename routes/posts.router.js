import { Router } from "express";
import { allPosts, newPost } from "../controllers/posts.controller.js";
const router= new Router();

router.get("/", allPosts);
router.post("/", newPost);

export default router;

