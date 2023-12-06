import { Box, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { format } from 'date-fns';

const Footer = () => {
 
  return (
    <Box sx={{display : "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#171d14", color: "white", height:"100px"}} padding={"20px"}>
      <Box flexGrow={{lg:1, xs:0}}>
        <Typography sx={{fontSize:{xs:"16px", lg:"24px"}}} >
    
          @{format(new Date(), "yyyy")} AbduPorfolio.
        </Typography>
      </Box>
     
      
          <Box display={"flex"} sx={{justifyContent: "space-between", margin: "25px auto", cursor: "pointer"}} width={"8%"}  >
                <IconButton >
                  <Link href= "https://t.me/A_SH_0108" target="_blank" underline='none' color={"white"}>
                    <TelegramIcon  sx={{transform : "1.2,1.2", transition: "all .5s ease"}}/>
                  </Link>
                </IconButton>
                  <IconButton>
                <Link href="https://www.instagram.com/shermukhammadovich" target="_blank" underline='none' color={"pink"}>
                    <InstagramIcon />
                </Link>
                  </IconButton>
                <IconButton>
                  <LinkedInIcon/>
                </IconButton>

          </Box>
 
  
    </Box>
  )
}

export default Footer

