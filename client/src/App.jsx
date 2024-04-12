import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutUs, Home, OurAgents, Properties, PublicLayout, Search } from './pages/Public'
import path from './utils/path'
import { Modal } from './components'
import { useAppStore } from './store/useAppStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { isShowModal } = useAppStore()
    return (
        <div>
            {isShowModal && <Modal />}
            <Routes>
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.PROPERTIES} element={<Properties />} />
                    <Route path={path.OUR_AGENTS} element={<OurAgents />} />
                    <Route path={path.ABOUT_US} element={<AboutUs />} />
                    <Route path={path.SEARCH} element={<Search />} />
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    )
}

export default App