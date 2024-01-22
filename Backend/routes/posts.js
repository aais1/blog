const express = require('express');
const router = express.Router();
const Blog=require('../models/blogModel');
const {createBlog,getBlogs,getBlog,deleteBlog}=require('../controllers/blogController');

// Get all posts
router.get('/',getBlogs);

// Get post by ID
router.get('/:id', getBlog);

// Create a new post
router.post('/new', createBlog);

// Delete post by ID
router.delete('/:id', deleteBlog);

// Update post by ID
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    // Logic to update a specific post by ID in the database
    res.json({ msg: `Update post with ID ${postId}` });
});

module.exports = router;
