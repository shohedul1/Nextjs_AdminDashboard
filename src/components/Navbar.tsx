import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* serach bar */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Image src={"/search.png"} alt='seachbar' width={500} height={500} className='w-[14px] h-[14px] ' />
                <input type="text" placeholder='Search....' className='outline-none w-[200px] p-2 bg-transparent ' />
            </div>
            {/* icons and user */}
            <div className='flex items-center gap-6 justify-end w-full'>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src={"/message.png"} alt='message' height={500} width={500} className='w-5 h-5' />
                </div>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                    <Image src={"/announcement.png"} alt='message' height={500} width={500} className='w-5 h-5' />
                    <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>John Doe</span>
                    <span className='text-[10px] text-gray-500 text-right'>Admin</span>
                </div>
                <Image src={"/avatar.png"} alt='iamge' width={500} height={500} className='w-9 h-9 rounded-full' />
            </div>

        </div>
    )
}

export default Navbar