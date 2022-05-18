import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';


const Footer = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <div container>
          <Grid my={10} container>
           <Grid pl={matches ? 8 : 0} textAlign={matches ? "left" : "center" } item md={3} xs={12}>
            <Typography variant='h6' sx={{color:"black" , fontSize: 35,fontWeight:"bold" }}>
            
              <Link to="/" >Heals</Link>
              
            </Typography>
            <Typography mt={3} variant='h3' sx={{color:"#7B8288" , fontSize: 15 }}>Got Questions</Typography>
            <Typography mt={1} variant='h3' sx={{color:"#29353F" , fontSize: 20,fontWeight:"bold" }}>1900 0012 333</Typography>
            <Typography mt={3} variant='h3' sx={{color:"#505457" , fontSize: 15 }}>Calista wese 7292 dictinv av</Typography>
            <Typography mt={1} variant='h3' sx={{color:"#505457" , fontSize: 15 }}>Antonolia,italy</Typography>
          </Grid>
          <Grid mt={matches ? 0 : 5} pl={matches ? 8 : 0} textAlign={matches ? "left" : "center" } item md={3} xs={12}>
            <Typography variant='h5'   sx={{color:"black" , fontSize: 20, fontWeight: "bold"}}>Support</Typography>
        
          
          <ul className='footer-ul'>
              <li>
              <Link to="/privacypolicy" >Privacy Policy </Link>
              </li>
              <li>
              <Link to="/termsandcondition" >Terms and Condition </Link>
              </li>
              <li>
              <Link to="/paymentpolicy" >Payment Policy </Link>
              </li>
              <li>
              <Link to="/faqs" >Frequently Asked Questions </Link>
              </li>
              <li>
              <Link to="/howitwork" >How it Work </Link>
              </li>
              <li>
              <Link to="/careers" >Careers </Link>
              </li>
          </ul>
          
         
        
          </Grid>
            <Grid mt={matches ? 0 : 5} pl={matches ? 8 : 0} textAlign={matches ? "left" : "center" } item md={3} xs={12}>
            <Typography variant='h5'   sx={{color:"black" , fontSize: 20, fontWeight: "bold"}}>Social</Typography>
             
          <ul className='footer-ul'>
              <li>
              <Link to="/privacypolicy" >Facebook </Link>
              </li>
              <li>
              <Link to="/termsandcondition" >Instagram </Link>
              </li>
              <li>
              <Link to="/paymentpolicy" >Twiter </Link>
              </li>
              <li>
              <Link to="/faqs" >Linkedin</Link>
              </li>
              <li>
              <Link to="/howitwork" >WhatsApp </Link>
              </li>

          </ul>
            </Grid>
            <Grid mt={matches ? 0 : 5} textAlign={matches ? "left" : "center" } item md={3} xs={12}>
            <Typography variant='h5'   sx={{color:"black" , fontSize: 20, fontWeight: "bold"}}>Newsletter</Typography>
        
              <Link to="/howitwork" >Get the latest News </Link>
              
           
           <Box mt={4}
          component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
         }}
      noValidate
      autoComplete="off"
    >
     <TextField sx={{}} id="standard-basic" label="Enter Your Email Here" variant="standard" />
               
              <Link to="/howitwork" >Subscribe</Link>
              
    </Box>
            </Grid>
          </Grid>
      </div>
    </>
  )
}

export default Footer