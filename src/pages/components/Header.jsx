import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Project from '../Project'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
    var tl = gsap.timeline();
    useGSAP(()=>{
        tl.from("#logo",{
            y:50,
            duration:1,
            delay:0.1,
            opacity:-1
        }),
        tl.from("#home",{
            y:50,
            duration:0.5,
            stagger:0.6,
        });
    })
    const [value, setValue] = useState(true);
     const clickhandler = () => {
         setValue(prevValue => !prevValue);  
}
   
    return (
        <>
            <div className='bg-zinc-900 fixed w-full top-0 left-0 right-0 overflow-hidden z-20' id="head">
            <div className='flex justify-between sm:px-6 px-4 py-3   text-white  max-w-7xl mx-auto'>
                <div className='text-2xl text-[#d3e97a]' id="logo">M.A.</div>
                <ul className='flex gap-4 text-2xl md:flex-row flex-col items-center justify-center' id="ul">
                <li className={`${value ? 'block' : 'hidden'} md:hidden text-[#d3e97a] absolute top-4 right-3`} onClick={clickhandler}><RxHamburgerMenu /></li>
                    <li className={`${value ? 'hidden' : 'block'} md:hidden text-[#d3e97a]`} onClick={clickhandler}> <MdClose /></li>
                    <Link className={`${value ? 'hidden' : 'block'} md:block`} id="home" to={'/'}><li>Home</li></Link>
                    <Link className={`${value ? 'hidden' : 'block'} md:block`} id="home" to={'/about'}><li>About</li></Link>
                    <Link className={`${value ? 'hidden' : 'block'} md:block`} id="home" to={'/project'}><li>Project</li></Link>
                </ul>
            </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </>
    )
}

export default   Header