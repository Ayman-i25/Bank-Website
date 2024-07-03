import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/header';
import line from '../../assets/images/Curvy Line.png'
const Questions = () => {
    const data = [
        { Q: 'How do I open a new bank account?', A: 'To open a new bank account, you can visit any of our branches with valid identification and proof of address. Alternatively, you can apply online through our website by filling out the necessary forms and uploading the required documents.' },
        { Q: 'What types of accounts can I open at your bank?', A: 'We offer a variety of accounts to meet your needs, including:|Savings Accounts|Checking Accounts|Business Accounts|Certificates of Deposit (CDs)|Money Market Accounts|Individual Retirement Accounts (IRAs)' },
        { Q: 'How can I check my account balance?', A: 'You can check your account balance through several methods: by logging into your account on our website, using our mobile banking app, checking at any ATM with your debit card, visiting any of our branches, or calling our customer service number for balance inquiries.' },
        { Q: 'How do I reset my online banking password?', A: 'To reset your online banking password, go to the login page on our website, click on "Forgot Password," and follow the prompts to verify your identity and reset your password. If you encounter any issues, please contact our customer service for assistance.' },
        { Q: 'What should I do if my debit/credit card is lost or stolen?', A: 'If your debit or credit card is lost or stolen, please contact our customer service immediately to report it. We will block the card to prevent unauthorized transactions and issue a replacement card.' },
        { Q: 'How can I transfer money between accounts?', A: 'You can transfer money between accounts using our online banking system, mobile banking app, by visiting any of our branches, or by calling our customer service for assistance.' },
    ]
    return (
        <Box position={'relative'}>
            {/* <Box sx={{background:` url(${line})`, width: '100%', height:'100%', position:'absolute', top:'0px', right:'0px'}}></Box> */}
            <Container>
                <Box sx={{ borderRight: '2px solid black', borderLeft: '2px solid black', padding: '100px 30px' }}>
                    <Header title={'Frequently Asked Questions'} />
                    <Box sx={{ marginTop: '50px' }} >
                        {data.map((el, index) => (
                            <Accordion key={index} >
                                <AccordionSummary
                                    sx={{ background:index % 2 === 0 ? '#9044d8' : '#b06fe9', color: 'white' }}
                                    expandIcon={<ExpandMoreIcon fontSize='medium' color='warning' />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography fontSize={'15px'} variant="h6" >{el.Q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ background: '#f3f0f5' }}>
                                    {el.A}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Questions
