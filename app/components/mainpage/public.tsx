import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import Nav from "../nav";
import { useChat } from 'ai/react';


const Public = () => {
    return (
        <div>
           
            <div className=' flex flex-col ' id='publicdem'>
                <div className=' flex flex-col mx-12 py-24 px-80 '>
                    <h1 className=' mb-4 mt-10  lg:text-6xl font-bold  bg-gradient-to-r from-indigo-400 to-red-600 inline-block text-transparent bg-clip-text'>
                        Hello,Chakka
                    </h1>
                    <p className='mb-8 text-gray-500 text-3xl'>
                        How can i help you today
                    </p>
                </div>
                <div className="relative min-h-screen">
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="flex flex-row  w-full fixed bottom-0 left-0  justify-center items-center pb-10 ">
                            <div className='flex flex-row border-2  border-gray-300 bg-black h-10 px-5 w-1/2 pr-7 rounded-full text-sm  focus:outline-none'>
                                <input
                                    type="text"
                                    className='bg-black text-white w-full h-full outline-none' // Removed transparent class and adjusted colors
                                    placeholder="Enter a prompt here"
                                />
                                <div className='flex items-center ml-auto space-x-2 '>
                                    <CiImageOn className='text-2xl' />
                                    <FaMicrophone className='pl-2 text-2xl' />
                                </div>

                            </div>




                        </div>
                    </div>

                </div>


            </div>
            <p className='flex items-center justify-center'>

                Hello, Chakka
            </p>
        </div>
    )
}

export default Public
