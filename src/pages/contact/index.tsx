import Layout from '@/layout/layout'
import React from 'react'
import {Box} from "@mui/material"
import { GetServerSideProps } from 'next'
import { PortfolioServece } from '@/services/porfolio-service'
import { Contacts } from '@/interface/contact.interface'
import Contact from './contact'
import SEO from '@/layout/seo/seo'

const ContactPage = ({contact} : GetContactProps) => {
  return (
    <SEO metaTitle='Contact'>
    <Layout>
        <Contact contact={contact}/>
    </Layout>

    </SEO>
  )
}

export default ContactPage


export const getServerSideProps : GetServerSideProps<GetContactProps> = async () => {

  const contact  = await PortfolioServece.getContact()
    return {
        props: {
            contact
        }
    }
}

interface GetContactProps {
  contact : Contacts[]
}