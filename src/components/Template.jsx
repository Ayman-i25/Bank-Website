import { Box } from '@mui/material'
import React from 'react'

const Template = ({children}) => {
    return (
        <Box sx={{borderBottom:'2px solid black'}}>
            {children}
        </Box>
    )
}

export default Template
