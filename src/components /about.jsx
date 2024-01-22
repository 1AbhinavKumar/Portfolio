import React from 'react'

const about = () => {
  return (
    <div name= 'about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                    </p>
            </div>

            <p className=' text-xl mt-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis veniam et atque molestiae adipisci quasi est possimus rerum a explicabo, quae exercitationem quos repellendus, nam inventore, aspernatur unde dignissimos facilis.
            </p>
            <br/>
            <p className=' text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt fuga consequatur maiores reiciendis corrupti delectus! Accusamus, fuga unde? Id, laboriosam maiores in tempora perspiciatis excepturi vitae illum architecto iure.
            </p>
        </div>
    </div>
  )
}

export default about