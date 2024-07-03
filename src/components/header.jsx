import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({title}) => {
  return (
    <Box textAlign={'center'}>
        <Typography variant='h3' fontWeight={'bold'} mb={2}>{title}</Typography>
    </Box>
  )
}

export default Header
