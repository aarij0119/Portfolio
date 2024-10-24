import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { MdSettingsApplications } from "react-icons/md";
import Footer from './components/Footer';
const About = () => {
  return (
    <>
      <div className='pt-16  text-white pb-4 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 md:gap-7 lg:gap-4  xl:px-6'>
          <div className='py-3 flex justify-center items-start flex-col'>
            <h1 className='text-2xl about mx-auto mb-4 sm:mb-1 text-[#d3e97a]'>Know Who I am </h1>
            <p className='about md:text-lg'>Hello all! I am Muhammad <span className='text-[#d3e97a]'>Aarij</span> front-end developer from <span className='text-[#d3e97a]'>chandigarh</span> (india). </p>
            <p className='about md:text-lg mt-1'>I am a student doing it's 12<sup>th</sup> class with this I also worked for a company which is crescosoft in zirkapur...</p>
            <p className='about md:text-lg mt-1'>In future I would like to pursue <span className='text-[#d3e97a]'>BCA</span></p>
            <p className='about md:text-lg mt-1 mb-2'>In addition some activities I like to do</p>
            <ul className='mx-5'>
              <li className='flex items-center gap-2 about md:text-lg'><FaRegHandPointRight /> Reading Books</li>
              <li className='flex items-center gap-2 about md:text-lg'><FaRegHandPointRight />Playing Games</li>
              <li className='flex items-center gap-2 about md:text-lg'><FaRegHandPointRight />Traveling</li>
            </ul>
          </div>
          <div className='py-3 rounded-2xl overflow-hidden flex items-center justify-center'>
            <img className='rounded-2xl' src="/images/Skills.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='w-full bg-[#D9D9D9] mt-8 py-8'>
        <div className='max-w-7xl about mx-auto'>
          <h1 className='text-4xl text-center pb-6'>My <b>skills</b></h1>
          <div className='grid grid-cols-12 gap-4 px-4 mt-4 lg:pb-7'>
            <div className='lg:col-span-3 col-span-6 rounded-xl mx-auto'>
                <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl  hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                  <FaGitAlt />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Git</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6 mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <IoLogoJavascript />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>JavaScript</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6 mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <GrReactjs />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>ReactJs</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6 mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <RiTailwindCssFill />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Tailwind</h1>
                </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-4 px-4 mt-4 pb-5 mx-auto'>
            <div className='lg:col-span-3 col-span-6 rounded-xl mx-auto'>
                <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <FaCss3Alt />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Css</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6 mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <FaBootstrap />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Bootstrap</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6  mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <IoLogoHtml5 />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Html</h1>
                </div>
            </div>
            <div className='lg:col-span-3 col-span-6  mx-auto'>
            <div className='w-40 md:w-56 p-3 border-[3.6px] border-black rounded-xl hover:bg-black hover:text-[#d3e97a] transition duration-500'>
                <div className='text-6xl flex items-center justify-center'>
                <MdSettingsApplications />
                </div>
                <h1 className='text-center font-bold text-xl mt-4'>Gsap</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default About