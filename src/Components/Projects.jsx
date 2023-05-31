import React from 'react'
import ProjectItem from './ProjectItem'
import googleImg from '../assets/googleImg.jpg'
import netflixImg from '../assets/netflixImg.jpg'
import facebookImg from '../assets/facebookImg.jpg'
import tiktokImg from '../assets/tiktokImg.jpg'

const Projects = () => {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                I first started with web development in 2007-2010. Then again from 2020 until now. Here you can browse my projects.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={googleImg} title='Netflix App' />
                <ProjectItem img={netflixImg} title='Google App' />
                <ProjectItem img={facebookImg} title='Facebook App' />
                <ProjectItem img={tiktokImg} title='Tiktok App' />
            </div>
        </div>
    )
}

export default Projects
