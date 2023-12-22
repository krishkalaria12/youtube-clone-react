import React from 'react'
import { Navbar } from './components'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

function Layout() {
    return (
        <>
            <Box sx={{backgroundColor: "#000"}}>
                <Navbar />
                    <Outlet />
            </Box>
        </>
    )
}

export default Layout