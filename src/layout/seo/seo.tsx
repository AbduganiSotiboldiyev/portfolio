import Head from 'next/head'
import React from 'react'
import { SeoProps } from './seo.props'
import { SideConfig } from '@/config/side.config'

const SEO = ({children,
    metaTitle= SideConfig.metaTitle,
    metaDescription = SideConfig.metaDescription,
    metaKeywords = SideConfig.metaKeywords,
    author = SideConfig.author} :SeoProps) => {
  return (
    <>
    <Head>
            <meta charSet="utf-8"/>
            <meta name = "viewport" content = "width=device-width, initial-scale=1, maximum-scale=5"/>
            <title>{metaTitle}</title>
            <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
            <meta name = "description" content = {metaDescription}/>
            <meta name = "keyword" content = {metaKeywords}/>
            <meta name = "author" content = {author}/>
            <link rel ="shortcut icon" href={"/favicon.ico"} type='image/x-icon' />
    </Head>
    {children}
    </>
  )
}

export default SEO