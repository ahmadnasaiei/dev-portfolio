import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';

function navbar() {
	// to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  // const [menu_class, setMenuClass] = useState("menu hidden")

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          // setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          // setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'project'
    },
    {
      id: 4,
      link: 'contact'
    },
  ]

  return (
    <div className='w-full px-6 fixed z-50 md:backdrop-blur-xl md:flex'>
      <div className="main flex justify-between items-center py-4 mx-auto md:w-9/12">
        <div className='cursor-pointer z-10 opacity-0 md:opacity-100'>
          <a href="#"><img src={logo} className='w-32 h-auto' alt="" /></a>
        </div>
        <ul className='hidden lg:flex'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-10 cursor-pointer uppercase tracking-widest hover:text-ascent duration-150'>{link}</li>
          ))}
        </ul>
        <a href={require("../../assets/AhmadNasaiei_Resume.pdf")} download="AhmadNasaiei_Resume"><button className='hidden lg:flex px-6 py-2 border-2 border-ascent text-ascent rounded-full hover:bg-ascent hover:text-bg duration-150'>RESUME</button></a>
        <div className='bg-primary shadow-md p-2 rounded-full lg:hidden z-20'>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className={`fixed top-0 right-0 z-10 w-1/2 h-screen bg-primary text-light transform transition-transform duration-300 ease-in-out ${isMenuClicked ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <ul className='flex flex-col justify-center items-center h-full'>
              <li className='py-6 text-xl cursor-pointer uppercase tracking-widest hover:text-ascent duration-150'>
                <a href="#"><img src={logo} className='w-32 h-auto' alt="" /></a>
              </li>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='py-6 text-xl cursor-pointer uppercase tracking-widest hover:text-ascent duration-150'
              >
                {link}
              </li>
            ))}
            <li className='py-6 text-xl cursor-pointer uppercase tracking-widest'>
              <button className='md:flex px-6 py-2 border-2 border-ascent text-ascent rounded-full hover:bg-ascent hover:text-primary duration-150'>
                RESUME
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`fixed inset-0 bg-black z-5 transition-opacity duration-300 ${isMenuClicked ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuClicked(false)}
        />
      </div>
    </div>
  )
}

export default navbar