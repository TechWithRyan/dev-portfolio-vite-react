import React from 'react'
import ProjectItem from './ProjectItem'
import googleImg from '../assets/googleImg.jpg'
import netflixImg from '../assets/netflixImg.jpg'

const Projects = () => {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Ea excepteur ea elit ipsum enim qui do magna enim.
                In irure laborum eu cupidatat voluptate et sint Lorem occaecat amet voluptate. Pariatur est occaecat qui aliqua nisi minim occaecat pariatur nulla quis mollit. In mollit dolore anim proident do magna sunt. Incididunt minim esse dolore anim sunt sunt nostrud ex eiusmod magna enim laborum velit sunt. Minim aliqua nostrud est ad deserunt pariatur et magna.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={googleImg} title='Netflix App' />
                <ProjectItem img={netflixImg} title='Netflix App' />
                <ProjectItem img={netflixImg} title='Netflix App' />
                <ProjectItem img={googleImg} title='Netflix App' />
            </div>
        </div>
    )
}

export default Projects
