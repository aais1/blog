const Blog=require('../models/blogModel');

// Get all posts
const getBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.find({}).sort({createdAt:-1});
        res.status(200).json({blogs});
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//Get post by ID
const getBlog=async(req,res)=>{
    try{
        const blog=await Blog.findById(req.params.id);
        res.status(200).json({blog});
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

// Create a new post
const createBlog= async(req,res)=>{
        const {title,intro,body}=req.body;
        try{
            const blog = await Blog.create({title,intro,body});
            res.status(201).json({blog});
        }catch(error){
            res.status(400).json({error:error.message})
        }
}

// Delete post by ID
const deleteBlog=async(req,res)=>{
    try{
        const blog=await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({blog});
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//update post by ID

module.exports={
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog
};