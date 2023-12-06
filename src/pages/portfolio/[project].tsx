import React from 'react'
import {Box,Typography} from "@mui/material"
import { GetServerSideProps } from 'next'
import { PortfolioServece } from '@/services/porfolio-service'
import { Project } from '@/interface/projects.interface'
import Layout from '@/layout/layout'
import { DetailedPage } from '@/components'
import SEO from '@/layout/seo/seo'
import { useRouter } from 'next/router'
 
const DetailedProject = ({projects} : DetailedProjectPageProps) => {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <SEO metaTitle={`${router.query.project} project`}>
    <Layout>
      <DetailedPage projects = {projects}/>
    </Layout>

    </SEO>
  )
}

export default DetailedProject


export const getServerSideProps: GetServerSideProps<DetailedProjectPageProps> = async ({query}) => {
  const projects = await PortfolioServece.getDetailedProject(query.project as string);
  return{
    props : {
      projects
    }
  }
}


interface DetailedProjectPageProps {
  projects : Project[];
}