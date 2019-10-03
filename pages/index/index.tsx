import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'

const css = require('./index.module.css')

const Home: NextPage = (): JSX.Element => {
    React.useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .then(() => {
                    console.log('Succesfully registered service worker.')
                })
                .catch(error => {
                    console.log('Error while registering service worker.', error)
                })
        } else {
            console.log('Service worker not supported.')
        }   
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Portfolio</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Portfolio page" />
                <meta name="keywords" content="Joona Joenpolvi, joonajo, react, typescript, nextjs, portfolio," />
                <meta name="author" content="Joona Joenpolvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#071b9f" />
                <link rel="manifest" href="/static/manifest/manifest.json" />
                <link rel="apple-touch-icon" href="" />
            </Head>
            <Layout>
                <Cover />
                <Content />
            </Layout>
        </React.Fragment>
    )
}
export default Home