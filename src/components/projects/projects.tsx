import React from 'react'
import {Box,Typography} from '@mui/material'
import Image1 from 'next/legacy/image'
import { ProjectProps } from './projects.interface'
import { useRouter } from 'next/router'

const Projects = ({project} : ProjectProps) => {
    const router = useRouter()
  return (
    <Box width={"100%"} height={"70vh"}>
        <Box width={{xs:"90%", lg:"60%"}} marginX={"auto"}>
            <Typography  sx={{textAlign:"center",fontWeight:{xs : "200", lg:"400"}, fontSize : {xs : "32px", sm :"40px", md :"60px", lg : "72px"}}} mb={5}> Recent Projects  </Typography>
            <Box width={"100%"} sx={{display: "flex" ,justifyContent: "space-between", alignItems:"center",flexWrap:"wrap"}}>
                <>
                {project.map(item => (
                    <Box key={item.id} position={"relative"} className="project_img" mb={5} onClick = {() => router.push(`/portfolio/${item.project}`)}>
                        <Image1  width={300} height={200} objectFit='cover' className='project_img' style={{borderRadius : "15px",cursor: "pointer" }} src={item.proImage.url} alt='project_img' />
                        <Box position={"absolute"} sx={{top: "150px", bottom: 0, left: 0, right: 0,backgroundColor: "#f8f8ff", opacity:"0.8", visibility:"hidden"}} className="project_img_layout">
                            <Typography variant="h5" color={"midnightblue"}>{item.proName.toUpperCase()}</Typography>
                            <Typography variant="h6" color={"midnightblue"}> {item.proDescription.slice(0 ,60)}...</Typography>
                        </Box>

                    </Box>

                ))}
                </> 
              
            </Box>
        </Box>
    </Box>
  )
}

export default Projects