import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const id=useParams().id;
    document.title = "Blog | Post";

    const [post, setPost] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/posts' ,
          { headers: { 'Content-Type': 'application/json' },
            method: 'GET',
            mode: 'cors'
          });
          console.log(response);
          const data = await response.json();
          setPost(()=>{return data.find((post)=>{return post.id==id})});
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
    
      fetchData();
    }, []);
    
  return (
    <>
    <div className='text-center text-3xl font-bold m-4'>Post</div>
    <div className='w-[100vw] md:w-[80vw] mx-auto md:border p-3 my-4 md:p-8 md:my-8'>
      <div className='flex justify-between'>
        <h1 className='text-lg m-0 md:text-xl font-bold md:my-2'>{post.Title}</h1>
        <button className=' text-red-500 border border-red-500 hover:bg-red-500 hover:text-white w-[100px] h-[35px]
        max-h-[38px]' >Delete</button>
      </div>
      <h3 className='text-md font-bold my-2'>{post.Intro}</h3>
      <p className='text-md my-2'>{post.Body}</p>
    </div>
    </>
  )
}

export default Post