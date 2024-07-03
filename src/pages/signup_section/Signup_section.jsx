import React from 'react'
import bg from '../../assets/images/singup.png'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
const Signup_section = () => {
    return (
        <Box sx={{ backgroundImage: `url(${bg})`, height: '400px', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Container sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ marginLeft: { md: '50%' } }}>
                        <Typography sx={{display:{xs:'none', sm:'block'}}} variant='h2' color='white' fontWeight={'bold'}>Create your
                            online account
                            with ease!</Typography>
                        <Typography sx={{display:{xs:'block', sm:'none'}}} variant='h5' color='white' fontWeight={'bold'}>Create your
                            online account
                            with ease!</Typography>
                        <Typography py={2} variant='subtitle2' color='white' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                        <Box sx={{width:'100%', textAlign:'center'}}>
                            <Button variant='outlined' sx={{ color: "white", border: '1px solid white' }}>Signup Here</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Signup_section
