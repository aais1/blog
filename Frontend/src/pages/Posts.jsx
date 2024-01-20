import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Loader from '../components/Loader';

const Posts = () => {
  document.title = "Blog | Posts";

  const [posts, setPosts] = useState([]);

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
        setPosts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>
      {(!posts.length>0) ? (
        <Loader />
      ) : (
        <>
          <div className='text-3xl font-bold underline text-center mt-4'>Posts:</div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6'>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <li className='m-5 p-2 border hover:cursor-pointer hover:border-black duration-75'>
                    <h2 className='font-bold text-2xl'>{post.Title}</h2>
                    <p className='font-bold text-md'>{post.Intro}</p>
                    <p className='text-md max-w-[100%] max-h-[100px] line-clamp-4'>{post.Body}</p>
                  </li>
                </Link>
              ))
            ) : (
              <p>No posts to show</p>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default Posts;
