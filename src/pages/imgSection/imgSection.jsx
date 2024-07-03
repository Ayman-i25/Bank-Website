import React from 'react'
import img1 from '../../assets/images/pic1.jpg'
import img2 from '../../assets/images/pic2.jpg'
import img3 from '../../assets/images/pic3.jpg'
import img4 from '../../assets/images/pic4.jpg'
import img5 from '../../assets/images/pic5.jpg'
import img6 from '../../assets/images/pic6.jpg'
import { Box, Button, Grid, Typography } from '@mui/material'
const ImgSection = () => {
    const data = [
        { img: img1, title: '', gray: false },
        { img: img2, title: 'Business Banking', subtitle: 'Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse trices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', btn: 'Learn More', gray: true },
        { img: img3, title: '', gray: false },
        { img: img4, title: 'Business Banking', subtitle: 'Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse trices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', btn: 'Learn More', gray: true },
        { img: img5, title: '', gray: false },
        { img: img6, title: 'Business Banking', subtitle: 'Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse trices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', btn: 'Learn More', gray: true },
    ]
    return (
        <Box>
            <Grid container>
                {data.map((el, index) => (
                    <Grid position={'relative'} key={index} item xs={12} sm={6} md={4}>
                        <Box sx={{ position: 'relative', backgroundImage: `url(${el.img})`, height: '300px', backgroundSize: 'COVER', filter: el.gray ? 'grayscale(100%)' : '' }}>
                            {el.title.length > 0 && (
                                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                    <Typography variant='h4' color='white' fontWeight={'bold'}>{el.title}</Typography>
                                    <Typography variant='body1' color='white' sx={{ fontSize: '11px', width: '300px' }} gutterBottom>{el.subtitle}</Typography>
                                    {/* <Button disableElevation variant='contained' color='warning' size='small'>{el.btn}</Button> */}
                                </Box>
                            )}
                        </Box>
                        {el.title.length > 0 && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '75%',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                }}
                            >
                                <Button
                                    disableElevation
                                    variant='contained'
                                    color='warning'
                                    size='small'
                                >
                                    {el.btn}
                                </Button>
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default ImgSection
