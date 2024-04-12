import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo1 from '~/assets/logo1.png'
import logo2 from '~/assets/logo2.png'
import { Button, Login } from '..'
import { navigations } from '~/utils/constants'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { useUserStore } from '~/store/useUserStore'
import { useAppStore } from '~/store/useAppStore'

const Navigation = () => {
    const location = useLocation()
    const { token } = useUserStore()
    const { setModal } = useAppStore()
    return (
        <div className={twMerge(
            clsx(
                'fixed top-[85px] w-screen z-50 bg-transparent px-[100px] py-[26px] flex items-center justify-between',
                location.pathname !== '/' && 'bg-white'
            )
        )}>
            <Link to='/'>
                <img src={location.pathname === '/' ? logo1 : logo2} alt="logo" className='w-[180px] object-contain' />
            </Link>
            <div className='flex items-center gap-4'>
                <div className={twMerge(
                    clsx(
                        'flex items-center gap-8 text-main-100',
                        location.pathname !== '/' && 'text-gray-700'
                    ))}>
                    {navigations.map(element => (
                        <NavLink
                            key={element.id}
                            to={element.path}
                            className={({ isActive }) => twMerge(
                                clsx(
                                    isActive && 'text-white font-medium',
                                    location.pathname !== '/' && 'text-gray-900'
                                )
                            )}
                        >
                            {element.text}
                        </NavLink>
                    ))}
                </div>
                {!token ? <Button buttonClassname={twMerge(
                    clsx(location.pathname === '/' && 'bg-transparent border border-main-100')
                )}
                    handleOnClick={() => setModal(true, <Login />)}
                >Sign in</Button> :
                    <Button buttonClassname={twMerge(
                        clsx(location.pathname === '/' && 'bg-transparent border border-main-100')
                    )}>Add Listing</Button>}
            </div>
        </div>
    )
}

export default Navigation