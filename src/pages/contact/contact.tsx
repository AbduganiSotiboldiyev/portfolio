import React from 'react'
import { ContactPageProps } from './contactpage.interface'
import {Box,Typography,Link} from "@mui/material"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
// import Link from 'next/link'

const Contact = ({contact}  : ContactPageProps) => {
  console.log(contact)
  return (
    <Box>
      <Typography variant="h2" sx={{fontWeight : {xs:"200", lg:"500"}, fontSize :{xs: "44px" , lg: "70px"}}}  textAlign={"center"} mt={12} >Contacts </Typography>
      <Box width={{xs : "90vw" , lg:"60vw"}} height={{xs:"35vh",lg:"45vh"}} margin={"25px auto"} sx={{backgroundColor: "#272829", borderRadius: "14px", boxShadow: "12px 12px 44px 16px #2f2f2f"}}>
        {contact.map(item => (
          <>
          <Box margin={{xs:"20px, 40px", lg:"45px 40px"}} key={item.id}>
            <Box  display={"flex"} flexDirection={"row"} justifyContent={"space-around"}>
              <Box mt={5} >
                <Typography sx={{fontSize:{xs:"16px", lg:"24px"}}} mb={3}>Phone number : </Typography>
                <Typography sx={{fontSize:{xs:"16px", lg:"24px"}}} mb={3}>Email:</Typography>
                <Typography sx={{fontSize:{xs:"16px", lg:"24px"}}} mb={3}>Adress:</Typography>
                <Typography sx={{fontSize:{xs:"16px", lg:"24px"}}} mb={3}>Github:</Typography>
                
              </Box>
              <Box mt={5} >
                <Typography mb={3} sx={{fontSize:{xs:"16px", lg:"24px"}}}>{item.phoneNumber}</Typography>
                <Typography mb={3} sx={{fontSize:{xs:"16px", lg:"24px"}}}>{item.email}</Typography>
                <Typography mb={3} sx={{fontSize:{xs:"16px", lg:"24px"}}}>{item.address}</Typography>
                <Link  href={`${item.github}`} target='_' underline='none' sx={{fontSize:{xs:"16px", lg:"24px"}}} > Github adress </Link>
              </Box>
            </Box>
            <Box display={"flex"} sx={{justifyContent: "space-around", margin: "25px auto", cursor: "pointer"}} width={"15%"}  >
              <IconButton >
                <Link href={`${item.telegram}`} target="_blank" underline='none' color={"white"}>
                  <TelegramIcon  sx={{transform : "1.2,1.2", transition: "all .5s ease"}}/>
                </Link>
              </IconButton>
                <IconButton>
              <Link href={`${item.instagram}`} target="_blank" underline='none' color={"pink"}>
                  <InstagramIcon />
              </Link>
                </IconButton>
              <IconButton>
                <LinkedInIcon/>
              </IconButton>

            </Box>
          </Box>
          </>


        ))}

      </Box>
    </Box>
  )
}

export default Contact