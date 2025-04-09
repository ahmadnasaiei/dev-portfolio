import React from 'react'
import heroImage from '../../assets/hero.jpg'
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
					<img src={heroImage} className="w-60 clip-circle cursor-pointer duration-200 md:w-80" alt="" />
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
			
			{/* <div className='zigzag'/> */}
			<section id='about' className='flex justify-center py-20 bg-gray-200'>
				<div className='flex-col justify-center text-3xl lg:w-5/6'>
					<div className='px-8 md:px-20 lg:px-52'>
						<div className='flex'>
							<h1 className='flex font-medium mb-3 md:text-4xl'>My Primary Toolbelt</h1>
							<Star className='h-10 w-10 ml-4 mt-1.5'/>
						</div>
						<p className='sm-text text-sm md:text-base'>As much as I love working with my current stack, I'm always open to new challenges that help me grow — pushing me beyond who I was yesterday, and bringing me closer to who I aim to be tomorrow.</p>
					</div>
					<div className='mt-14 text-center'>
						<Row justify="center">
							{techStack1.map((item, i) => (
								<Col key={i} span={4}>
									<div className='flex flex-col items-center group'>
										<div className='w-12 h-12 md:w-20 md:h-20 filter group-hover:transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12'>
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
										<div className='w-12 h-12 md:w-20 md:h-20 filter group-hover:transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
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

			<section className='main flex flex-col items-center min-h-fit pt-14 md:pt-32'>

			</section>
		</>
	)
}

export default home