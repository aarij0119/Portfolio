import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 py-3 pb-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center justify-around'>
                    <h1 className='about text-zinc-300 mb-1.5 md:mb-0'>Design and Developed by Aarij</h1>
                    <h1 className='about text-zinc-300 mb-1.5 md:mb-0'>Copyright &copy; 2024 Aarij</h1>
                    <div className='flex gap-3'>
                        <div className=' bg-[#222222]  hover:shadow-lg hover:shadow-blue-500 hover cursor-pointer text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://www.linkedin.com/in/muhammad-aarij-2b06ba326/' target='_blank'><FaLinkedinIn /></a>
                        </div>
                        <div className='hover:shadow-lg hover:shadow-zinc-400 cursor-pointer bg-[#222222] text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://github.com/aarij0119' target='_blank'><FaGithub /></a>
                        </div>
                        <div className='hover:shadow-lg cursor-pointer hover:shadow-blue-500  bg-[#222222] text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://x.com/MuhammadAa60498' target='_blank'><FaTwitter /></a>
                        </div>
                        <div className='hover:shadow-lg cursor-pointer hover:shadow-red-900  bg-[#222222] text-[#d3e97a] rounded-full mt-3 w-8 h-8 flex items-center justify-center'>
                            <a href='https://www.instagram.com/muhammad_aarij0119' target='_blank'><RiInstagramFill /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Footer