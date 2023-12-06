import React from 'react'
import {Box,Typography} from "@mui/material"
import { AboutPageProps } from './aboutpage.interface'
import Image from 'next/image'
const About = ({aboutmes} : AboutPageProps) => {
  return (
    <Box width={"100%"}>
        <Box width={{xs: "90%",sm:"80%",md:"70%",lg:"60%"}} marginX={"auto"} sx={{textAlign:"center", marginTop: "50px"}}>
            <Typography sx={{fontSize : {xs : "32px", sm :"40px", md :"60px", lg : "72px"}}} fontWeight={"400"} color={"f3f3f3"} >
                About Me
            </Typography>
            {/* description and image */}
            <Box width={"100%"}>
                 <>
                    {aboutmes.map(item => (
                        <>
                            <Box key={item.id} sx={{display: "flex", justifyContent:"space-between" ,alignItems:"center",flexDirection:{xs : "column", md:"row"}} } mt = {"80px"} width={{xs:"100%", md:"70%" }} marginX={"auto"} >
                                <Image src={item.avatar.url} alt="My Image" width={200} height={239} objectFit='cover' className='avatar' />
                                <Box position={"relative"} width={{sm:"80%", md:"70%",lg:"65%"}} >
                                    <Typography sx={{fontSize : {xs : "32px", sm :"40px", md :"44px", lg : "50px"}}} mb={3}>{item.name}</Typography>
                                    <Typography  sx={{fontSize:{xs : "14px", sm : "18px", md:"20px", lg:"22px"} }}>{item.description}</Typography>
                                </Box>
                            </Box>
                            <Box mt={10}  textAlign={"start"}>
                                <Typography sx={{fontSize : {xs : "12px", sm:"16px", md:"20px"}}} width={{xs:"100%"}}>
                                    <div dangerouslySetInnerHTML = {{__html : item.aboutInfo.html}}></div>  

                                </Typography>
                            </Box>
                        </>
                    ))}
                    </>
            </Box>
            {/* description and image */}

        </Box>
    </Box>
  )
}

export default About