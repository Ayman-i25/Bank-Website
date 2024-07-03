import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import step1 from '../../assets/images/step1.png'
import step2 from '../../assets/images/step2.png'
import step3 from '../../assets/images/step3.png'
import step4 from '../../assets/images/step4.png'
const Steps = () => {
    const data = [
        { title: 'Step 1', icon: step1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { title: 'Step 2', icon: step2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { title: 'Step 3', icon: step3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { title: 'Step 4', icon: step4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' }
    ]
    return (
        <Box>
            <Container>
                <Box sx={{ borderRight: '2px solid black', borderLeft: '2px solid black', padding: '100px 30px' }}>
                    <Header title={'Open An Online Account'} />
                    <Grid container spacing={4} sx={{ marginTop: '50px' }}>
                        {data.map((el,index) => (
                            <Grid key={index} item xs={12} sm={6} md={3} justifyContent="center" alignItems="center">
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant={'h4'} fontWeight={'bold'}>{el.title}</Typography>
                                    <Box sx={{ height: '70px', width: '70px', padding: '10px 0' }}>
                                        <img style={{ width: '100%', height: '100%' }} src={el.icon} alt={'pic'} />
                                    </Box>
                                    <Typography textAlign={'center'} color={'GrayText'} fontSize={"12px"} variant={'subtitle2'} gutterBottom>{el.text}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box marginTop={'130px'}>
                        <Typography variant='h4' fontWeight={'bold'} marginBottom={'20px'}>Download our Mobile App</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} padding={'15px'}>
                                <Typography fontWeight={'bold'} variant='h6'>Available on the App Store</Typography>
                                <Typography variant='subtitle2' gutterBottom>{data[1].text}</Typography>
                                <Button disableElevation color='secondary' variant='contained' size="small">Download Here</Button>
                            </Grid>
                            <Grid item xs={12} sm={6} padding={'15px'}>
                                <Typography fontWeight={'bold'} variant='h6'>Available on the Google Play</Typography>
                                <Typography variant='subtitle2' gutterBottom>{data[1].text}</Typography>
                                <Button disableElevation color='secondary' variant='contained' size="small">Download Here</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Steps
