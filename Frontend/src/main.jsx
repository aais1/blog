import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import {Home,About,Contact,NewPost,Posts,Error404} from './pages'
import Post from './components/Post.jsx'

document.title = "Blog | Home";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<Post />}/>
        <Route path="posts/new" element={<NewPost />} />
        <Route path='*' element={<Error404 />}/> {/* ERROR 404 Page */}
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
