import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {

  document.title = "Blog | New Post";
  const [formData, setFormData] = useState({name: "",intro: "",message: ""});
  const [pending,setPending] = useState(false);
  const [feedback,setFeedback] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.name && formData.intro && formData.message){
    setPending(true);

    const blog ={title:formData.name , intro:formData.intro ,body:formData.message};
    
    fetch('http://localhost:3000/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setPending(false); 
      setFeedback('');
      navigate('/posts')
    }).catch((error)=>{
      console.log(error);
    });

    setFormData({ name: "", intro: "", message: "" }); 
  }else{
    setFeedback("Please fill all the fields");
  }
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[90w] mx-auto my-5  border-black p-4 md:w-[70vw] md:border-2">
      <h1 className="text-center font-bold text-2xl mb-4">Enter Your New Blog</h1>
      <label htmlFor="name" className="font-bold">Blog Title:</label>
      <input type="text" id="name" className="my-1  border-2 p-1" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="intro" className="font-bold">Blog Intro:</label>
      <input type="text" id="intro" name="intro" className="my-2 border-2 p-1" value={formData.intro} onChange={handleChange}/>

      <label htmlFor="message" className="font-bold">Blog Body:</label>
      <textarea id="message" name="message" className="my-1 border-2 p-1 h-[200px]" value={formData.message} onChange={handleChange}/>

      <button type="submit" className={`mt-8 p-2 w-[70%] md:max-w-[350px] text-black border-2 border-black mx-auto hover:bg-black hover:text-white duration-150 lo  ${pending ? 'disabled:' : ''}`}>{pending ? 'Submiting' :'Submit' }</button>

      <p className="text-red-500">{feedback}</p>
    </form>
  );
}