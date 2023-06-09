import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left " src="https://cdn.pixabay.com/photo/2017/06/17/10/55/hot-air-balloon-2411851_1280.jpg" alt="photo" />
            {/*             <img className="w-full h-screen object-cover object-left " src="https://cdn.pixabay.com/photo/2017/06/04/23/17/lighthouse-2372461_1280.jpg" alt="photo" />
 */}            {/*            <iframe className="w-full h-screen object-cover object-left" src="https://cdn.pixabay.com/vimeo/241674181/natverk-12716.mp4?width=1280&hash=21bf5cb6abac1a5de51dd909d3ee66fd7e27ce54" frameborder="0"></iframe> */}
            <div className="w-full h-screen absolute top-0 left-0 bg-white/0">

                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white '>I'm Ryan-Phillips</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Web Developer 🤓', // Types 'One'
                                1000, // Waits 1s
                                'Kind Person 😊', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Music Lover 🎶',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaYoutube className="cursor-pointer" size={20} />
                        <FaFacebook className="cursor-pointer" size={20} />
                        <FaInstagram className="cursor-pointer" size={20} />
                        <FaLinkedin className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
