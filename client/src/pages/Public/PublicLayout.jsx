import React from 'react'
import { Navigation, TopHeader } from '~/components'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

const PublicLayout = () => {
    const location = useLocation()
    return (
        <main>
            <TopHeader />
            <Navigation />
            <div className={clsx(location.pathname === '/' ? 'pt-0' : 'pt-[232px]')}>
                <Outlet />
            </div>
        </main>
    )
}

export default PublicLayout