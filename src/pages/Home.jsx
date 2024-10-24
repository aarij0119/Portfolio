import React from 'react'
import Footer from './components/Footer';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
    var tl = gsap.timeline()
    useGSAP(()=>{
        tl.from("#name",{
            y:50,
            duration:1,
            opacity:-1,
            
        })
        tl.from("#headparah",{
            y:50,
            duration:1,
            opacity:-1,
        })
        tl.from("#btn",{
            y:50,
            duration:1,
            opacity:-1,
        })
        tl.from("#icons",{
            y:50,
            duration:1,
            opacity:-1,
            scale:-1,
            stagger: 1
        })
        tl.from("#img1",{
            duration:1.5,
            opacity:-1,
            scale:-1,
        })
    })
    return (
        <>
            <div className='grid md:grid-cols-2 md:gap-7 lg:gap-4 px-4 md:px-6  text-white py-16 pt-24  sm:py-24  sm:pt-36 max-w-7xl mx-auto'>
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-5xl sm:text-6xl' id="name">HI, I AM <span className='text-5xl sm:text-5xl'>👋</span><br />Muhammad Aarij</h1>
                    <p className='font-weight text-[0.9rem] md:text-[1rem]' id="headparah">A front-end developer passionate about building<br /> accessible and user friendly websites.</p>
                    <button id="btn" className='font-weight1 px-2 py-1 mt-3 rounded-full bg-[#d3e97a] text-black text-sm md:text-[1rem]'>Connect With me</button>
                    <div className='flex gap-3 mt-1 md:mt-0'>
                        <div id="icons" className=' bg-[#222222]  hover:shadow-lg hover:shadow-blue-500 hover cursor-pointer text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://www.linkedin.com/in/muhammad-aarij-2b06ba326/' target='_blank'><FaLinkedinIn /></a>
                        </div>
                        <div id="icons" className='hover:shadow-lg hover:shadow-zinc-400 cursor-pointer bg-[#222222] text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://github.com/aarij0119' target='_blank'><FaGithub /></a>
                        </div>
                        <div id="icons" className='hover:shadow-lg cursor-pointer hover:shadow-blue-500  bg-[#222222] text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://x.com/MuhammadAa60498' target='_blank'><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl overflow-hidden mt-6 md:mt-0'>
                    <img className='object-cover w-full h-full' id="img1" src="/images/portfolio.webp" alt="portfolio_first" />
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-7 mb-9  px-4 md:px-6 text-white md:py-12 md:pb-20  lg:py-24 max-w-7xl mx-auto'>
                <div className='rounded-xl overflow-hidden'>
                    <img className='bg-cover w-full h-full' src="/images/about.jpg" alt="About image" />
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl about mb-5 border-b w-[7.2rem] md:w-[10.2rem] border-b-[#d3e97a]'>About <span className='text-[#d3e97a]'>Me</span></h1>
                    <h4 className='aboutp md:text-xl mb-1.5 md:mb-3'>I was alone no one was with me I tried to learn code and fell in love with coding..🤷‍♂️</h4>
                    <h4 className='aboutp md:text-xl mb-1.5 md:mb-3'>I am fluent like - <span className='text-[#d3e97a]'>JavaScript, ReactJs, Tailwind, Css, Html, Boostrap.</span></h4>
                    <h4 className='aboutp md:text-xl mb-1.5 md:mb-3'>I also <span className='text-[#c6d38f]'>worked</span> for <span className='text-[#d3e97a]'>crescosoft</span> which is a company in zirakpur near metro.</h4>
                    <h4 className='aboutp md:text-xl'>I am doing 12<sup>th</sup> class and in future I would like to pursue BCA.</h4>
                </div>
            </div>
            <Footer  linkedIn={<FaLinkedinIn />} git={<FaGithub />} twit={<FaTwitter />}/>
        </>
    )
}

export default Home