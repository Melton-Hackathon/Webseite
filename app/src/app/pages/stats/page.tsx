"use client"

import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const stats = () => {

    var name = sessionStorage.getItem('melton-session-username');
    var login = sessionStorage.getItem('melton-login-session');

    console.log(name)
    console.log(login)

    const result = {
        name,
        login
    }

    return (
        <>
            <Header />
            <main>
                <h1>{result.name}</h1>
                <br />
                <h1>{result.login}</h1>
            </main>
            <Footer />
        </>

    )
}

export default stats
