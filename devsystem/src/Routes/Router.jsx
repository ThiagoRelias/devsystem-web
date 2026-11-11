import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Page/Login.jsx'
import Sobre from '../Page/Sobre.jsx'
import Navbar from '../Components/Navbar.jsx'

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}
