import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import img from '../../assets/images/about_us.png'
const About_us = () => {
  return (
    <Box>
        <Container>
            <Box sx={{width:'100%'}} position={'relative'}>
                <Typography variant='subtitle2' fontWeight={'bold'} sx={{position:'absolute', top:'10px', left:'10px'}}>Reliable. Safe. Secure.</Typography>
                <Typography variant='subtitle2' sx={{position:'absolute', top:'10px', right:'10px',fontSize:{xs:'11px',sm:'15px'}}}>Live your best life with ease.</Typography>
            </Box>
            <Box sx={{padding:{xs:'120px 20px ',md:'120px 100px ',lg:'120px 160px '}, borderRight: '2px solid black', borderLeft: '2px solid black'}}>
                <Header title={'About Us'} />
                <Typography color={'gray'} variant='subtitle2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis cumsan lacus vel facilisis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. 
                </Typography>
                <Grid container mt={4}>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%', border:'1px solid black',objectFit:''}} src={img} alt='pic' />
                    </Grid>
                    <Grid item xs={12} md={6} pl={2} justifyItems={'center'}>
                        <Typography  textAlign={'center'} fontWeight={'bold'} variant='h4'>History</Typography>
                        <Typography color={'gray'} variant='subtitle2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis cumsan lacus vel facilisis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default About_us
