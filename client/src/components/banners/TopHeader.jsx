import clsx from 'clsx'
import React from 'react'
import icons from '~/utils/icons'
import { twMerge } from 'tailwind-merge'
import { useLocation } from 'react-router-dom'

const { IoMailOpenOutline, FiPhone, SlSocialFacebook, FaInstagram, AiOutlineYoutube } = icons

const TopHeader = () => {
    const location = useLocation()
    return (
        <div className={twMerge(
            clsx(
                'h-[85px] w-screen text-white border-b border-main-400 bg-transparent flex items-center justify-between fixed z-50 top-0 px-[100px] py-[26px]',
                location.pathname !== '/' && 'bg-main-700'
            ))}>
            <div className='flex items-center gap-2'>
                <IoMailOpenOutline size={20} />
                <div>
                    <span>Email us at: </span>
                    <span className='text-gray-300'>nguyencanhthien784@gmail.com</span>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex items-center text-gray-300 gap-6 text-xl'>
                    <span><SlSocialFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><AiOutlineYoutube /></span>
                </div>
                <div className='flex items-center gap-2 pl-6 border-l border-main-400'>
                    <FiPhone size={20} />
                    <span className='text-gray-300'> 0348918677</span>
                </div>
            </div>
        </div>
    )
}

export default TopHeader