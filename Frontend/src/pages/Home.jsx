import React from 'react'
import Loader from '../components/Loader';

const Home = () => {
    document.title = "Blog | Home";
  return (
    <>
    <p className='text-center font-bold'>Nothing to see HERE😁</p>
    <div className='h-[67.67vh] flex flex-col'>
      <Loader/>
    </div>
    </>
  )
}

export default Home