import React from 'react'
import My_Image from "../assets/my_image.jpeg"
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-scroll';

const home = () => {
    return (
        <div name="home" className='md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row max-md:pt-80 max-sm:pt-40'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white '>I am a Full Stack Developer</h2>
                    
                    <p className='text-gray-500 py-4 max-w-md'>
                    Hey, I am Abhinav Kumar ,Final Year Student pursuing Bachelor’s of Technology from IIITDM Jabalpur.
                    </p>

                    <div>
                        <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-mb bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <FiArrowRightCircle size={25} className='ml-2'/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={My_Image} alt='my personal profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default home