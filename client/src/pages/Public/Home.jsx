import React from 'react'
import banner from '~/assets/banner.png'

const Home = () => {
    return (
        <div className='bg-white w-full'>
            <div className='w-full h-fit relative'>
                <img src={banner} alt="banner" className='w-full object-cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-6 pt-[85px]'>
                    <h1 className='text-5xl text-white'>Find Your Dream Home</h1>
                    <div className='text-white text-lg text-center'>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae;</p>
                        <p>Proin sodales ultrices nulla blandit
                            volutpat.</p>
                    </div>
                </div>
            </div>
            <div className='big:w-main w-screen m-auto'>
                content
            </div>
        </div>
    )
}

export default Home