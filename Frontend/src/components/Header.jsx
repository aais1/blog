import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener('scroll', () => {
    setShowMenu(false);
  });

  return (
    <>
    <div className={`md:hidden  absolute h-[100vh] w-[100%] ${showMenu ? `bg-white bg-opacity-10 backdrop-blur-[2px] ` : `hidden`}`} onClick={()=>{setShowMenu(!showMenu)}}></div>
    <header id="header" className="py-1 flex justify-between px-6 md:px-6 lg:px-10 border-b-2 border-t-4 border-t-yellow-500">
      <NavLink to='/'><img src="/blogger.png" alt="Logo" width={50} /></NavLink>

      <div className="md:hidden z-50 flex items-center">
        <RxHamburgerMenu style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => { setShowMenu(!showMenu) }} />
      </div>

      {
        (
          <div className={`md:hidden fixed top-0 left-0  ${showMenu ? `translate-x-[0px]`:`translate-x-[-300px]`} h-[100vh] w-[50vw] transition-transform duration-150 bg-gray-700`}>
            <div className="flex flex-col gap-3 m-2 md:hidden">
              <div className="flex item-center justify-center">
                <NavLink to='/' onClick={() => { setShowMenu(false) }}>
                  <img src="/blogger.png" alt="Logo" width={70} />
                </NavLink>
              </div>
              <NavLink to='/' className="inline-block p-4 border-b text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 duration-150" onClick={() => { setShowMenu(false) }}>Home</NavLink>
              <NavLink to='/about' className="inline-block p-4 border-b text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 duration-150" onClick={() => { setShowMenu(false) }}>About</NavLink>
              <NavLink to='/contact' className="inline-block p-4 border-b text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 duration-150" onClick={() => { setShowMenu(false) }}>Contact</NavLink>
              <NavLink to='/posts' className="inline-block p-4 border-b text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 duration-150" onClick={() => { setShowMenu(false) }}>Posts</NavLink>
              <NavLink to='/posts/new' className="inline-block p-4 border-b text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 duration-150" onClick={() => { setShowMenu(false) }}>New Post</NavLink>
            </div>
          </div>
        )
      }

      <div className="hidden items-center md:flex">
        <NavLink to='/' className="inline-block py-2 px-4 text-black no-underline hover:scale-x-125 hover:text-yellow-500 duration-150">Home</NavLink>
        <NavLink to='/about' className="inline-block py-2 px-4 text-black no-underline hover:scale-x-125 hover:text-yellow-500 duration-150">About</NavLink>
        <NavLink to='/contact' className="inline-block py-2 px-4 text-black no-underline hover:scale-x-125 hover:text-yellow-500 duration-150">Contact</NavLink>
        <NavLink to='/posts' className="inline-block py-2 px-4 text-black no-underline hover:scale-x-125 hover:text-yellow-500 duration-150">Posts</NavLink>
        <NavLink to='/posts/new' className="inline-block py-2 px-4 text-black no-underline hover:scale-x-125 hover:text-yellow-500 duration-150">New Post</NavLink>
      </div>
    </header>
    </>
  );
}

export default Header;
