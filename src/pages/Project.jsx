import React from 'react'
import Footer from './components/Footer';
import { FaGithub } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
const Project = () => {
  return (
    <>
      <div className='sm:pt-32 pt-20 text-white md:pb-3 pb-6 max-w-7xl mx-auto sm:px-6 px-4'>
        <h1 className='about sm:text-5xl text-3xl border-b-2 border-[#d3e97a] w-[16.8rem]'>My Projects</h1>
        <p className='aboutp  pt-3'>Here are some of the selected projects that showcase my passion for<br /> front-end development.</p>
      </div>
      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto sm:py-16 py-6 px-4 sm:px-6">
        {/* Image Section */}
        <div className="bg-[#1A1A1A] sm:p-8 p-4 rounded-xl">
          <div className="rounded-xl overflow-hidden w-full h-full ">
            <img className="w-full h-full bg-cover" src="images/barrister.png" alt="Bubble Game" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="about text-2xl">Find My Barrister</h1>
          <p className="aboutp text-sm mt-3">
            So, This is a project which I created when I was working for crescosoft. In which I did only front-end part and with the help of this project I learnt tailwind css.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Year</h3>
            <h3 className="text-sm about uppercase">2024</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="https://findmybarrister.moreaboutme.in/" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">Show Live</h4>
              <RiLiveFill />
            </a>
          </div>
        </div>
      </div>

      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto py-16 sm:px-6 px-4">
        {/* Content Section */}
        <div className="flex flex-col md:flex-col justify-center order-2 md:order-1">
          <h1 className="about text-2xl">Bubble Game</h1>
          <p className="aboutp text-sm mt-3">
            This is my first project which I created when I was learning front-end
            development. Basically, I created this to get more knowledge about
            JavaScript.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Project info</h3>
            <h3 className="text-sm about uppercase">2023</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="https://github.com/aarij0119/Bubble-game" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">See on github</h4>
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-[#1A1A1A] md:p-8 p-4 rounded-xl order-1 md:order-2">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img className="w-full h-full bg-cover" src="images/Bubble Game.png" alt="Bubble Game" />
          </div>
        </div>
      </div>

      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto py-16 sm:px-6 px-4">
        {/* Content Section */}
        {/* Image Section */}
        <div className="bg-[#1A1A1A] p-4 md:p-8 rounded-xl">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img className="w-full h-full bg-cover" src="images/miranda.png" alt="Bubble Game" />
          </div>
        </div>
        <div className="flex flex-col md:flex-col justify-center">
          <h1 className="about text-2xl">Miranda Portfolio Clone</h1>
          <p className="aboutp text-sm mt-3">
            This one is I created only Htm, Css, JavaScript and this one is not responsive because that time I did not know about responsive design.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Project info</h3>
            <h3 className="text-sm about uppercase">2023</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="https://github.com/aarij0119/miranda-clone" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">See on github</h4>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto py-16 sm:px-6 px-4">
        {/* Content Section */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="about text-2xl">Sidcup Family Golf Club</h1>
          <p className="aboutp text-sm mt-3">
            This one is my favourite project because yet I have learnt only htm,css,javaScript but in this project I learn gsap which i use for animation.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Project info</h3>
            <h3 className="text-sm about uppercase">2023</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="https://github.com/aarij0119/Sidcup-Family-Golf-clone-" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">See on github</h4>
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-[#1A1A1A] p-4 md:p-8 rounded-xl order-1 md:order-2">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img className="w-full h-full bg-cover" src="images/sidcup family.png" alt="Bubble Game" />
          </div>
        </div>
      </div>

      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto py-16 sm:px-6 px-4">
        {/* Image Section */}
        <div className="bg-[#1A1A1A] p-4 md:p-8 rounded-xl">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img className="w-full h-full bg-cover" src="images/pinterest.png" alt="Bubble Game" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="about text-2xl">Pinterest</h1>
          <p className="aboutp text-sm mt-3">
            This is pinterest project which developed on 18 of october after left of crescosoft here I want to learn backend so in this have log in and signup page which is working and also have profile where user can update it's profle and also have post section.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Project info</h3>
            <h3 className="text-sm about uppercase">2024</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">See on github</h4>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white grid  md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto py-16 pb-24 sm:px-6 px-4">
        {/* Content Section */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="about text-2xl">Translator</h1>
          <p className="aboutp text-sm mt-3">
            It's I created when I wanted to created English Translator app but fotunately I created this because this one is also good for parctice and this I created through an api call.
          </p>
          <h3 className="text-md about uppercase pt-3 pb-3 border-b border-zinc-500">
            Project info
          </h3>

          {/* Project Info */}
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Project info</h3>
            <h3 className="text-sm about uppercase">2023</h3>
          </div>
          <div className="pt-3 pb-3 border-b border-zinc-500 flex justify-between">
            <h3 className="text-sm about uppercase">Role</h3>
            <h3 className="text-sm about">Front-end Developer</h3>
          </div>

          {/* Github Link */}
          <div className="pt-7 text-[#d3e97a]">
            <a href="https://github.com/aarij0119/Minion-s-talk" target="_blank" className="text-xl flex items-center gap-1">
              <h4 className="about text-sm uppercase">See on github</h4>
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-[#1A1A1A] md:p-8 p-4 rounded-xl order-1 md:order-2">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img className="w-full h-full bg-cover" src="images/translater.png" alt="Bubble Game" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project