
import { About, Hero, Projects } from '@/components'
import { AboutMe } from '@/interface/aboutme.interface'
import { PortfolioType } from '@/interface/portfolio.interface'
import { Project } from '@/interface/projects.interface'


import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { PortfolioServece } from '@/services/porfolio-service'
import { Box } from '@mui/material'
import { log } from 'console'
import { GetServerSideProps } from 'next'
import Head from 'next/head'



const IndexPage = ({apps, aboutmes,project} : HomePageProps) => {
  

  return (
    <SEO>
      <Layout>
        
          <Hero apps={apps}/>
          <About aboutmes = {aboutmes}/>
          <Projects project = {project}/>
      </Layout>

    </SEO>
  )
}

export default IndexPage

export const getServerSideProps : GetServerSideProps<HomePageProps> = async () => {

  const apps = await PortfolioServece.getAllApps()
  const aboutmes = await PortfolioServece.getAboutMe()
  const project = await PortfolioServece.getProjects()
  return {
    props: {
      apps,
      aboutmes,
      project
    }
  }
}


interface HomePageProps {
  apps: PortfolioType[],
  aboutmes : AboutMe[],
  project : Project[]
}