
import { Box,Typography,Button } from "@mui/material"
import { DetailedPageProps } from "./detailed.interface"
import Image from "next/image"
import { useRouter } from "next/router"



const DetailedPage = ({projects} : DetailedPageProps) => {

  const router = useRouter()

  
  return (
    <Box>
        {projects.map(item => (
            <Box width={"100%"} key={item.id} >
                  <Box  width={"100%"} textAlign={"center"} mt={4} onClick={() => router.push(`${item.proAdress}`)}>
                      <Image src={item.proImage.url} alt={item.proName} width={500} height={500} objectFit="cover" className="project_slider_img" style={{borderRadius: "20px",cursor: "pointer", boxShadow:"6px 10px 40px 0px #dcdcdc"}} />
                       <Button  sx={{cursor :"pointer", display: "block", textAlign: "center", margin: "20px auto", fontSize : {xs : "32px", sm :"40px", md :"44px", lg : "50px"}}} >{item.proName.toLocaleUpperCase()} </Button> 
                  </Box> 
                  <Box width={"70%"} textAlign={"center"} margin={"0 auto"}  mt={5}>
                      <Typography variant="h5" fontWeight={"500"} mb={5}>{item.proDescription}  </Typography>
                      <Typography sx={{fontSize:{xs : "14px", sm : "18px", md:"20px", lg:"22px"}}} variant="body1" color={"gray"} mb={5}>{item.information.text} </Typography>
                      <div dangerouslySetInnerHTML = {{__html : item.information.html}}></div>                     

                  </Box> 
            </Box>
        ))}
    </Box>
  )
}

export default DetailedPage