
const Home = () => {
  document.title = "Blog | Home";
  
  return (
    <div className="flex justify-center items-center h-[73vh]">
      <p className="text-center font-bold text-2xl">This website is built using React, Express, and MongoDB (with Mongoose). The database used is MongoDB Atlas, a cloud-based solution. The styling is done using Tailwind CSS.</p>
    </div>
  );
}

export default Home