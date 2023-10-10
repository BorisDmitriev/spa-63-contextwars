import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import APIContainer from '../context/APIContainer'

export default function SharedLayout() {
    return (
        <>
            <APIContainer>
                <Navbar />
                <Outlet />
            </APIContainer>
        </>
    )
}
