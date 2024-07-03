import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import image from '../../assets/images/landing.png'
import arrow from '../../assets/images/Arrow1.png'
import Template from '../../components/Template'

const Landing = () => {
    return (
        <Box >
            <div></div>
            <Template>
            <Container >
                <Box sx={{borderRight:'2px solid black', borderLeft:'2px solid black'}}>
                    <Grid container>
                        <Grid item xs={12} md={6} lg={9} display={'flex'} alignItems={'center'} position={'relative'}>
                            <Box sx={{position:'absolute', top:'10px', right:'10px', display:{xs: 'none', md:'flex'}, flexDirection:'column', alignItems:'end', gap:1}}>
                                <Typography variant='button' color={'white'} bgcolor='black' p={'5px 15px'}>Offering high level security</Typography>
                                <Typography variant='button' border={'1px solid'} p={'5px 15px'}>And a big change to your quality of life</Typography>
                            </Box>
                            <Box sx={{position:'absolute', bottom:'10px', right:'10px', display:{xs:'none', sm:'block'}}}>
                                <img style={{width:'100%', height:'100%'}} src={arrow} alt={'pic'} />
                            </Box>
                            <Box sx={{padding:'0 20px', display: 'flex', alignItems: {xs:'center', sm:'start'}, flexDirection:'column', width:'500px' ,m:'30px 0', textAlign:{xs:'center', sm:'start'}}}>
                                <Typography variant='h3' fontWeight={'bolder'}>Make your <br /> purchases<br /> fast and easy.</Typography>
                                <Typography mb={'10px'} color={"GrayText"} variant='subtitle2'>In Diamond City Bank, we are happy serve to make life easier for you. Enjoy reliable, safe, and secure banking with us. Be able to chase and achieve your dreams and goals and feel limitless. </Typography>
                                <Button  variant='contained' color='primary'>Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item sx={{ display: { xs: 'none', md: 'flex' } }} md={6} lg={3}>
                            <Box sx={{borderLeft:'2px solid black'}}>
                                <img style={{width:'100%', height:'100%'}} src={image} alt={'pic'} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            </Template>
        </Box>
    )
}

export default Landing
