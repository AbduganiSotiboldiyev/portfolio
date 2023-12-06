import Layout from '@/layout/layout'
import React from 'react'
import About from './about'
import { GetServerSideProps } from 'next'
import { PortfolioServece } from '@/services/porfolio-service'
import { AboutMe } from '@/interface/aboutme.interface'
const AboutPage = ({aboutmes} : AboutPagePropsBlog) => {
  return (
    <Layout>
      <About aboutmes={aboutmes}/>
    </Layout>
  )
}

export default AboutPage

export const getServerSideProps : GetServerSideProps<AboutPagePropsBlog> = async () => {
  const aboutmes = await PortfolioServece.getAboutMe()
  return {
    props : {
      aboutmes
    }
  }
}

interface AboutPagePropsBlog {
  aboutmes: AboutMe[]
}