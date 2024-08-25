import React from 'react'

const about = () => {
  return (
    <div name= 'about' className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                    </p>
            </div>

            <p className=' text-xl mt-20'>
            Hi, I am Abhinav Kumar, a passionate problem solver and an enthusiastic developer with a keen interest in Data Structures and Algorithms (DSA). Over the time, I have honed my skills by solving more than 900 questions on various problem-solving platforms and given over 100 contests , including LeetCode where I have solved 550+ problems and have a rating of 1800+, and CodeChef, where I hold a 3-star rating 1715+.
            </p>
            <br/>
            <p className=' text-xl mb-10'>
            As a MERN stack developer, I have a solid foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. My technical expertise extends beyond web development to encompass fundamental computer science concepts such as Computer Networking and Operating Systems.
            </p>
            <p className='text-xl'>
            I am proficient in multiple programming languages, with strong capabilities in C++ and Python. 
            I am always eager to learn and take on new challenges, continually striving to improve my knowledge and contribute to impactful projects.
            </p>
        </div>
    </div>
  )
}

export default about