
const express=require('express');//importing express
const cors=require('cors');//cross origin resource sharing
const postsRoutes=require('./routes/posts');//importing routes
const dotenv=require('dotenv');//for environment variables

const app=express();//initializing express
dotenv.config();//configuring dotenv

//middlewares
app.use(express.json());//to parse json data
app.use(cors());//to allow cross origin requests

//sample json data
const posts=[
    {
        "id":1,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":2,
        "Title":"My second blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":3,
        "Title":"My third blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },    {
      "id":4,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":5,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":6,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },    {
      "id":7,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":8,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":9,
        "Title":"My first blog",
        "Intro":"This is my first blog",
        "Body":"This is the body of my first blog"
    },
    {
      "id":10,
      "Title":"My first blog",
      "Intro":"This is my first blog",
      "Body":"This is the body of my first blog"
  },
  {
    "id":11,
      "Title":"My first blog",
      "Intro":"This is my first blog",
      "Body":"This is the body of my first blog"
  },
  {
    "id":12,
      "Title":"My first blog",
      "Intro":"This is my first blog",
      "Body":"This is the body of my first blog"
  },
  {
    "id":13,
    "Title":"My first blog",
    "Intro":"This is my first blog",
    "Body":"This is the body of my first blog"
},
{
  "id":14,
    "Title":"My first blog",
    "Intro":"This is my first blog",
    "Body":"This is the body of my first blog"
},
{
  "id":15,
    "Title":"My first blog",
    "Intro":"This is my first blog",
    "Body":"This is the body of my first Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio qui. Optio fuga ad vitae, quo odit, eaque corporis perspiciatis nulla in, ab excepturi nisi maiores natus modi veniam accusamus? blog"
}
];


//api routes
app.use('/posts',postsRoutes);

  
//server
app.listen(process.env.PORT,()=>{
  console.log('server is running on port 3000');
});