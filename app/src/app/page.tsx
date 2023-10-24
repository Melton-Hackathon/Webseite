"use client"

import Image from 'next/image'
import { Helmet } from 'react-helmet';

import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main id='landing-page-main'>
        <div>
          <div className='info-text'>
            <h1>Willkommen, Abenteurer!</h1>
            <p>
              Wir haben dich schon erwartet.<br />
              Melde dich an und tauche ein in die Welt von Melton ein.
            </p>
            <br />
            <h5>Downloade hier das Game: </h5>
            <button>Download</button>
          </div>

          <Image
            src="/melton_logo.png"
            width={250}
            height={250}
            alt="Melton Logo"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
