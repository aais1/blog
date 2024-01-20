const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());

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

app.get('/posts', (req, res) => {  
    res.setHeader('Content-Type', 'application/json');
    res.json(posts);
  });z

  
  app.listen(3000,()=>{
    console.log('server is running on port 3000');
});