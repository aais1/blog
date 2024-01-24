import React from 'react';
import { useState,useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const id=useParams().id;
    const navigate=useNavigate();
    document.title = "Blog | Post";

    const [post, setPost] = useState({});

    const delPost = async (id) => {
      fetch('http://localhost:3000/posts/'+id, 
      {
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        navigate('/posts');
      })
    }

    useEffect(() => {
      const fetchData = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/posts/${id}` ,
          { headers: { 'Content-Type': 'application/json' },
            method: 'GET',
            mode: 'cors'
          });
          const data = await response.json();
          setPost(data.blog);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
    
      fetchData(id);
    }, []);
    
  return (
    <>
    <div className='text-center text-3xl font-bold m-4'>Post</div>
    <div className='w-[100vw] md:w-[80vw] mx-auto md:border p-3 my-4 md:p-8 md:my-8'>
      { 
        post.title ?
      <div className='flex md: justify-between'>
        <h1 className='text-lg m-0 md:text-xl font-bold md:my-2'>{ post.title }</h1>
        <button className=' text-red-500 border border-red-500 hover:bg-red-500 hover:text-white w-[100px] h-[35px]
        max-h-[38px]' onClick={()=>delPost(post._id)} >Delete</button>
      </div>
      : <Skeleton />
      }
      <h3 className='text-md font-bold my-2'>{post.intro || <Skeleton /> }</h3>
      <p className='text-md my-2 min-h-[220px]'>{post.body || <Skeleton count={5} />}</p>
    </div>
    </>
  )
}

export default Post
