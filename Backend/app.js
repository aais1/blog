
const express=require('express');//importing express
const cors=require('cors');//cross origin resource sharing
const postsRoutes=require('./routes/posts');//importing routes
const dotenv=require('dotenv');//for environment variables
const mongoose=require('mongoose');//importing mongoose

const app=express();//initializing express
dotenv.config();//configuring dotenv

//middlewares
app.use(express.json());//to parse json data
app.use(cors());//to allow cross origin requests

//api routes
app.use('/posts',postsRoutes);

  
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
      app.listen(process.env.PORT,()=>{
      console.log('DB CONNECTED & is running on port ',process.env.PORT);
   });
  })
  .catch(()=>{
    console.log('error connecting to database');
  })