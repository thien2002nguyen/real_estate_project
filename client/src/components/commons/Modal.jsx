import React from 'react'
import { useAppStore } from '~/store/useAppStore'

const Modal = () => {
    const { contentModal, setModal } = useAppStore()
    return (
        <div className='relative'>
            <div className='absolute z-[100] top-0 left-0 w-screen flex items-center justify-center
                h-screen bg-overlay-50'
                onClick={() => setModal(false, null)}
            >
                {contentModal}
            </div>
        </div>
    )
}

export default Modal