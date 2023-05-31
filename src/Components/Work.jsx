import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Ipsum proident ullamco dolor consectetur do culpa ut fugiat culpa deserunt veniam occaecat.',
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Incididunt pariatur sit cillum aliqua anim occaecat magna minim veniam do deserunt dolore. Cillum culpa aliquip laborum exercitation qui cupidatat. Non quis magna consequat eu velit ipsum aute.',
    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Id enim exercitation proident quis eu ex cillum excepteur voluptate non aute.',
    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '2 Years',
        details: 'Ut velit nulla ad ex sit reprehenderit voluptate dolore. Occaecat ex in amet quis est ipsum nisi. Culpa nostrud ullamco est aute ullamco exercitation nisi tempor magna. Mollit magna occaecat reprehenderit labore excepteur id occaecat non non do consequat quis ipsum.',
    },
]
const Work = () => {
    return (
        <div id="work" className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work
