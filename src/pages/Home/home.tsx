import React from 'react'
import heroImage from '../../assets/hero.jpg'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

function home() {
	return (	
		<>
			<div className='main flex flex-col items-center h-screen'>
				<div className='mt-10 mb-6'>
					<img src={heroImage} className="w-60 clip-circle cursor-pointer duration-200 md:w-80" alt="" />
				</div>

				<div className='flex py-10'>
					<p className='font-consolas text-center text-2xl md:text-3xl'><span className='block relative text-right font-rockSalt -right-10 top-4 -rotate-12 text-lg md:top-3 md:text-2xl md:-right-16 '>Friends! 🙋‍♂️</span>console.log (<q>Hello <span className='strikethrough'>World!</span></q>)</p>
				</div>

				<div className='flex'>
					<h1 className='font-semibold text-4xl text-center px-4 md:text-6xl duration-200'>I<span>&#39;</span>m Nasaiei, a frontend developer.</h1>
				</div>

				<div className='flex py-5'>
					<p className='text-sm leading-6 mx-4 font-light text-center tracking-wider opacity-70 md:text-base'>I<span>&#39;</span>m a front-end developer with a passion for design, creating websites that are both sleek and refined. <br /> With code as my tool and design as my muse, I build web experiences that users can<span>&#39;</span>t refuse.</p>
				</div>

				<div className='flex'>
					<button className='flex items-center gap-2 text-lg mt-4 px-9 py-2.5 border-2 tracking-widest border-ascent text-ascent rounded-full hover:bg-ascent hover:text-bg duration-150 group' onClick={() => window.location.replace("/#about")}>More of me <FontAwesomeIcon icon={faAnglesDown} className='group-hover:animate-bounce'/></button>
				</div>
			</div>
			
			<section id='about'>
				<div className='main flex justify-center text-3xl'>
					<h1>My Primary Toolbelt</h1>
				</div>
			</section>
		</>
  )
}

export default home