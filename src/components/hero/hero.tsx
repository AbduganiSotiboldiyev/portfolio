import React from 'react'
import {Box, Typography} from "@mui/material"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import { HeroProps } from './hero.interface';


const responsive  ={
    mobile: {
        breakpoint: { max: 4000, min: 0 },
    items: 1
  }
}
const Hero = ({apps}: HeroProps) => {
  return (
    <Box width={"100%"} height={"20vh"} sx={{backgroundColor: "red"}}>
        
        <Carousel responsive={responsive} >
            
            {apps.map(item => (
                <Box  key={item.id} >
                    <Box position={"relative"} width={"100%"} height={"20vh"}>
                         <Image src={item.image.url} alt='img' fill />
              
                        <Box sx={{position: "absolute", width: "100%", backgroundColor: "rgba(0,0,0,0.6)", top: "0", left : "0", right :"0", bottom: "0"}}>
                            <Box sx={{position: "relative",color: "white", top:"50%", transform: "translateY(-50%)", paddingLeft:{xs:"10px", md:"50px" }, width:"70vw"}}>
                                <Typography sx={{fontSize : {xs : "24px", sm : "34px", md:"58px"}}} >{item.title}</Typography>
                                <Typography sx={{fontSize : {xs : "14px", sm : "20px", md:"22px"}, color :"f2f2f2"}}>{item.exert}</Typography>
                                

                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Carousel>
    </Box>
  )
}

export default Hero