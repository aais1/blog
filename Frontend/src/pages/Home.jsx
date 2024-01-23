
const Home = () => {
  document.title = "Blog | Home";
  
  return (
    <div className="flex justify-center items-center h-[73vh]">
      <p className="text-center font-bold text-2xl p-20 md:p-36">This website is built using <span className="text-cyan-500">React,</span> <span className=" italic underline underline-offset-4">Express,</span> and <span className="text-green-500">MongoDB,(with Mongoose).</span>  The database used is MongoDB Atlas, a <span className="text-blue-600 ">cloud-based</span> solution. The styling is done using <span className="text-indigo-900">Tailwind CSS.</span></p>
    </div>
  );
}

export default Home