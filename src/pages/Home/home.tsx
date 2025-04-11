import React from 'react'
import heroImg from '../../assets/hero.jpg'
import heroImg2 from '../../assets/hero2.jpg'
import heroImg2landscape from '../../assets/hero2-landscape.jpg'
import heroImg2square from '../../assets/hero2-square.jpg'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'antd'
import { ReactComponent as AntDesign } from '../../assets/svg-icon/ant-design.svg';
import { ReactComponent as Figma } from '../../assets/svg-icon/figma.svg';
import { ReactComponent as Git } from '../../assets/svg-icon/git.svg';
import { ReactComponent as NextJS } from '../../assets/svg-icon/nextjs.svg';
import { ReactComponent as NodeJS } from '../../assets/svg-icon/nodejs.svg';
import { ReactComponent as PostgreSQL } from '../../assets/svg-icon/postgresql.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg-icon/react.svg';
import { ReactComponent as Tailwind } from '../../assets/svg-icon/tailwind.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/svg-icon/typescript.svg';
import { ReactComponent as Vercel } from '../../assets/svg-icon/vercel.svg';
import { ReactComponent as Star } from '../../assets/svg-icon/star.svg';
import Navbar from '../../components/NavBar/navbar';

function home() {
	const techStack1 = [
		{
			stackIcon: ReactIcon,
			stackName: 'React'
		},
		{
			stackIcon: TypeScriptIcon,
			stackName: 'TypeScript'
		},
		{
			stackIcon: NextJS,
			stackName: 'NextJS'
		},
		{
			stackIcon: NodeJS,
			stackName: 'NodeJS'
		},
		{
			stackIcon: PostgreSQL,
			stackName: 'PostgreSQL'
		},
	]
	const techStack2 = [
		{
			stackIcon: Tailwind,
			stackName: 'Tailwind CSS'
		},
		{
			stackIcon: AntDesign,
			stackName: 'Ant Design'
		},
		{
			stackIcon: Figma,
			stackName: 'Figma'
		},
		{
			stackIcon: Git,
			stackName: 'Git'
		},
		{
			stackIcon: Vercel,
			stackName: 'Vercel'
		},
	]

	return (	
		<>
			<div className='main flex flex-col items-center min-h-screen pt-14 md:pt-32'>
				<div className='mt-10 mb-6'>
					<img src={heroImg} className="w-60 clip-circle cursor-pointer duration-200 md:w-80" alt="" />
				</div>

				<div className='flex py-10'>
					<p className='font-consolas text-center text-2xl md:text-3xl'><span className='block relative text-right font-rockSalt -right-6 top-4 -rotate-12 text-base md:top-3 md:text-2xl md:-right-16 '>Friends! 🙋‍♂️</span>console.log (<q>Hello <span className='strikethrough'>World!</span></q>)</p>
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

			
			<div className='zigzag'/>
			<section id='about' className='flex flex-col items-center min-h-fit py-20 bg-gray-200'>
				<div className='flex w-5/6 md:w-4/6'>
					<div className='hidden min-w-80 lg:block'>
						<img src={heroImg2} alt="" className='w-80 h-auto shadow-b-shadow saturate-150 duration-100' />
					</div>
					<div className='lg:ml-36'>
						<div className='flex'>
							<h1 className='font-medium mb-3 text-3xl md:text-4xl'>A few bytes about me</h1>
							<Star className='h-10 w-10 ml-4 mt-1.5'/>
						</div>
						<p className='sm-text text-sm'>
							My passion for tech started early—while others read Ujang or Gempak, I was all about Majalah PC. That love for all things digital led me to pursue Computer Science at UiTM Machang, my top UPU pick. It was there I got my hands dirty with core fundamentals and built several hands-on projects that laid the groundwork for everything that came next. <br /><br />

							Post-diploma, I briefly worked as a Graphic Designer—self-taught in Photoshop and Illustrator—before continuing my studies in Information Systems (Hons.) during the pandemic via distance learning. Despite the challenges, I led project teams and developed a real estate eCommerce site—integrating web scraping using Python and React for my final year project. <br /><br />

							Professionally, I kicked off with an internship at PETRONAS Dagangan Berhad as a Software Engineer, building ARENA—an internal web-based LNG bidding system. There, I worked with technologies like React, NextJS, NodeJS, Tailwind, and PostgreSQL, and got my first exposure to how enterprise systems operate at scale. <br /><br />

							After graduating, I joined PETRONAS Digital Sdn Bhd as a Front-End Developer. I worked on GO Dashboard, a critical platform for upper management showcasing real-time data from PETRONAS' global oil rigs. For two years, I collaborated in a cross-functional team of PMs, backend and fullstack devs, data engineers, UI/UX designers, and testers—gaining deep insight into agile product development and enterprise delivery. <br /><br />

							I'm always exploring new technologies, sharpening my skills, and seeking the next challenge to grow even further. Let's build something amazing together. 🫱🏼‍🫲🏻
						</p>
						<div className='min-w-full pt-10 lg:hidden'>
							<img src={heroImg2square} alt="" className='min-w-full h-auto' />
						</div>
					</div>
				</div>
			</section>
			<div className='zigzag rotate-180'/>


			<section id='' className='main flex justify-center py-20'>
				<div className='flex-col justify-center lg:w-5/6'>
					<div className='px-8 md:px-20 lg:px-52'>
						<div className='flex'>
							<h1 className='flex font-medium text-3xl mb-3 md:text-4xl'>My Primary Toolbelt</h1>
							<Star className='h-10 w-10 ml-4 mt-1.5'/>
						</div>
						<p className='sm-text text-sm md:text-base'>As much as I love working with my current stack, I'm always open to new challenges that help me grow — pushing me beyond who I was yesterday, and bringing me closer to who I aim to be tomorrow.</p>
					</div>
					<div className='mt-14 text-center'>
						<Row justify="center">
							{techStack1.map((item, i) => (
								<Col key={i} span={4}>
									<div className='flex flex-col items-center group'>
										<div className='w-12 h-12 md:w-20 md:h-20 filter group-hover:transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-12'>
											<item.stackIcon className='w-12 h-12 md:w-20 md:h-20' />
										</div>
										<p className='mt-4 text-xs md:text-base'>{item.stackName}</p>
									</div>
								</Col>
							))}
						</Row>
						<Row justify="center" className='mt-10'>
							{techStack2.map((item, i) => (
								<Col key={i} span={4}>
									<div className='flex flex-col items-center group'>
										<div className='w-12 h-12 md:w-20 md:h-20 filter group-hover:transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-12'>
											<item.stackIcon className='w-12 h-12 md:w-20 md:h-20' />
										</div>
										<p className='mt-4 text-xs md:text-base'>{item.stackName}</p>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</div>
			</section>


			<section id='' className='flex justify-center min-h-fit py-20'>
				<div className='w-5/6 bg-gray-200 p-14 md:w-4/6'>
					<div className='flex flex-col items-center'>
						<h1 className='font-medium text-3xl mb-3 md:text-4xl'>Featured Work</h1>
						<p className='sm-text'>From pixels to production—these are the things I've crafted with code, caffeine, and curiosity that I'm proud of.</p>
					</div>
					<Row className='flex justify-around mt-14'>
						<Col span={8} className=''>
							<span className='text-xl font-rocksalt'>ANPR Subsidized Petrol Subsidized Petrol</span>
						</Col>
						<Col span={8} className=''>
							<img src={heroImg2square} alt="" className='w-3/4 rounded-2xl' />
						</Col>
						<Col span={8} className='flex-grow'>
							<button className='gap-2 text-lg px-9 py-2.5 border-2 tracking-widest border-ascent text-ascent rounded-full hover:bg-ascent hover:text-bg duration-150 group'>View project</button>
						</Col>
					</Row>
				</div>
			</section>
		</>
	)
}

export default home