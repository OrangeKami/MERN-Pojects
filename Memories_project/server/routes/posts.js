import express from 'express';

<<<<<<< HEAD
import { getPosts, createPost, updatePost, deletePost, getPost, likePost } from '../controllers/posts.js'

const router = express.Router();


router.get('/', getPosts)
router.post("/", createPost )
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

=======
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
>>>>>>> 3ac36cf94fbdaf2987fe4adaae23b41d0f225e10

export default router;