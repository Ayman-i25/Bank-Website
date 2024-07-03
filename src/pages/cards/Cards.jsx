import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Template from '../../components/Template'
import card2 from '../../assets/images/card1.png'
import card1 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import cover from '../../assets/images/grien.png'
const Cards = () => {
    return (
        <Box sx={{  backgroundImage:`url(${cover})` }}>
            <Box></Box>
            <Box sx={{ borderTop: '2px solid black' }}>
                <Template>
                    <Container>
                        <Box sx={{ borderRight: '2px solid black', borderLeft: '2px solid black', padding: { xs: '150px 20px ', md: '150px 100px ', lg: '150px 160px ' } }}>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card sx={{ pb: 3 }}>
                                        <CardContent>
                                            <Typography fontWeight={"bold"}  variant="h5" component="div">
                                                Debit Cards
                                            </Typography>
                                        </CardContent>
                                        <CardMedia sx={{ height: '300px' }}>
                                            <img
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={card1}
                                                alt="pic"
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="subtitle2" fontSize={'11px'} color="text.secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button disableElevation variant='contained' size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card sx={{ pb: 3 }}>
                                        <CardContent>
                                            <Typography fontWeight={"bold"}  variant="h5" component="div">
                                                Credit Cards
                                            </Typography>
                                        </CardContent>
                                        <CardMedia sx={{ height: '300px' }}>
                                            <img
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={card2}
                                                alt="pic"
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="subtitle2" fontSize={'11px'} color="text.secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button disableElevation variant='contained' size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} >
                                    <Card sx={{ pb: 3 }}>
                                        <CardContent>
                                            <Typography fontWeight={"bold"}  variant="h5" component="div">
                                                Prepaid Cards
                                            </Typography>
                                        </CardContent>
                                        <CardMedia sx={{ height: '300px' }}>
                                            <img
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={card3}
                                                alt="pic"
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography variant="subtitle2" fontSize={'11px'} color="text.secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button disableElevation variant='contained' size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Box mt={5} textAlign={'center'}>

                                <Typography color={"white"} variant='h4' fontWeight={"bold"} gutterBottom>Reliable. Safe. Secure.</Typography>
                                <Typography color={"white"} variant='subtitle2' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Template>
            </Box>
        </Box>
    )
}

export default Cards
