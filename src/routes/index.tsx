import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from "../pages/Home";



const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes