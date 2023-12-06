import React from 'react'
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

import {Box,Typography,Button} from "@mui/material"
import { ProjectPageProps } from './projectpage.interface';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Projects = ({project} : ProjectPageProps) => {
 
  const router = useRouter()
  return (
    <Box className="project_container">
      <Box sx={{backgroundColor :"#2f2f2f"}} >
          <Typography pt={4}  textAlign={"center"} sx={{ fontWeight:"500",fontSize:{xs :"28px",sm:"30px",md:"40px", lg:"60px" } }}> Projects </Typography>
          <AwesomeSlider   className='project_slider' >
            {project.map(item => (
              <>
              <Button onClick={() => router.push(`${item.proAdress}`) } sx={{cursor :"pointer", display: "block", textAlign: "center", margin: "20px auto", fontSize:{xs:"20px", sm:"24px", md:"28px", lg:"32px"},letterSpacing:"14px"}}>{item.proName}</Button>
              <Box height={{xs:"25vh", lg:"80vh"}} width={{xs:"75vw", lg:"36.5vw"}} textAlign={"center"} sx={{boxShadow: "8px 2px 18px 2px grey",borderRadius:"15px"}}>
                <Box>
                    <Image width={700} height={480} objectFit='cover' className='project_slider_img' src={item.proImage.url} alt='rasm' style={{borderRadius:"15px" }}/>
                </Box>
                <Box width={"50%"} textAlign={"center"} margin={"0 auto"}  mt={5}>
                          <Typography variant="h5" fontWeight={"500"} mb={5}>{item.proDescription.slice(0,50)}...  </Typography>
                          <Typography variant="body1" color={"gray"} mb={5}>{item.information.text.slice(0,80)}... </Typography>
                          <div dangerouslySetInnerHTML = {{__html : item.information.html}}></div>  
                          <Button onClick={() => router.push(`portfolio/${item.project}`)} sx={{mb:"10px"}}>Read More</Button>                   
                </Box> 
              </Box>
              </>


            ) )}
            

          </AwesomeSlider>

      </Box>
    </Box>
  )
}

export default Projects