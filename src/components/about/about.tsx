import React from 'react'
import {Box,Typography} from "@mui/material"
import Image1 from 'next/legacy/image'
import { AboutProps } from './about.interface'



const About = ({aboutmes} : AboutProps) => {

  return (
    <Box width={"100%"} height={{md:"70vh",lg:"60vh"}} my={"70px"}>
        <Typography  sx={{textAlign: "center",fontSize : {xs : "32px", sm :"40px", md :"60px", lg : "72px"}}}>Welcome to my Portfolio</Typography>
        <Box>
          <>
          {aboutmes.map(item => (
            <Box key={item.id} sx={{display: "flex", justifyContent:"space-between" ,alignItems:"center", flexDirection : {xs : "column" , lg: "row"}} } mt = {"80px"} width={{xs:"100%",sm:"80%", md:"60%",lg:"40%"}} marginX={"auto"} >
                <Image1 src={item.avatar.url} alt="My Image" width={200} height={209} objectFit='cover' className='avatar' />
                <Box position={"relative"} width={"65%"} >
                  <Typography sx={{fontSize:{xs : "28px", sm : "32px", md:"40px", lg:"48px"}, textAlign : "center" }} mb={{xs:"4",lg:"5"}}>{item.name}</Typography>
                  <Typography sx={{fontSize:{xs : "14px", sm : "16px",md:"20px",lg:"22px"} }} >{item.description}</Typography>
                </Box>
            </Box>

          ))}
          </>

        </Box>
    </Box>
  )
}

export default About