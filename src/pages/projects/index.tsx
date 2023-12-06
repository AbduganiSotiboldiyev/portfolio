import React from 'react'
import {Box} from "@mui/material"
import Projects from './project'
import Layout from '@/layout/layout'

import { GetServerSideProps } from 'next'
import { Project } from '@/interface/projects.interface'
import { PortfolioServece } from '@/services/porfolio-service'
import SEO from '@/layout/seo/seo'
const ProjectsPage = ({project}  : ProjectPageBlogProps) => {
  return (
    <SEO metaTitle='All projects'>
      <Layout>
        <Projects project={project}/>

      </Layout>
    </SEO>
  )
}

export default ProjectsPage

export const getServerSideProps : GetServerSideProps<ProjectPageBlogProps> = async () => {
      const project = await PortfolioServece.getProjects()
  return { 
    props : {
        project
    }
  }

}

interface ProjectPageBlogProps {
  project : Project[]
}