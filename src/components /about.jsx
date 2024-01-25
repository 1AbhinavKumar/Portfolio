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
            Hey, I'm Abhinav Kumar, a passionate Full Stack Developer with expertise in creating dynamic and responsive web applications. My tech stack includes HTML, CSS, and JavaScript for building seamless user interfaces, while Node.js and Express handle the server-side logic. I specialize in crafting interactive front-end experiences with React and ensure robust back-end functionality.
            </p>
            <br/>
            <p className=' text-xl mb-10'>
            As a seasoned developer, I leverage the power of Python for additional versatility, contributing to a well-rounded skill set. My design approach is enhanced by the use of Tailwind CSS, bringing efficiency and aesthetic appeal to my projects.
            </p>
            <p className='text-xl'>
            Whether it's shaping the client-side with React or managing server-side operations with Node.js, I thrive on transforming ideas into scalable and efficient web solutions. Let's build something amazing together!
            </p>
        </div>
    </div>
  )
}

export default about