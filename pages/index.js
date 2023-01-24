import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'


export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb 2023</title>
       
      </Head>

      <Header />

      <Banner />

    </>
  )
}
