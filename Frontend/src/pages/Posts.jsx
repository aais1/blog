import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Posts = () => {
  document.title = "Blog | Posts";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts', {
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
        });
        const data = await response.json();
        setPosts(data.blogs);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
          <div className='min-h-[68.8vh]'>
            <div className='text-3xl font-bold underline text-center mt-4'>Posts:</div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6'>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Link to={`/posts/${post._id}`} key={post._id}>
                    <li className='m-5 p-2 border hover:cursor-pointer hover:border-black duration-75'>
                      <h2 className='font-bold text-2xl'>{post.title}</h2>
                      <p className='font-bold text-md'>{post.intro}</p>
                      <p className='text-md max-w-[100%] max-h-[100px] line-clamp-4'>{post.body}</p>
                    </li>
                  </Link>
                ))
              ) : (
                <p>No posts to show</p>
              )}
            </ul>
          </div>
          </>
        )}
      </>
    );
  };

  export default Posts;
