"use client"

import { useEffect } from 'react'

import helper from '../../shared/core/helper'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import RequestClass from '../../shared/core/request.class'

const r = new RequestClass()

const profile = () => {

    useEffect(() => {
        r.get('/api/creature/all')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <main>
                <h1>Die Sage der Vier Helden</h1>
                <p>Im Jahr 1374, zu Zeiten der Ritter und Schildknappen, lebten vier tapfere Helden: Sir Richard, Lady Isabella, Sir Frederick und Dame Elara. Sie trugen glänzende Rüstungen und mächtige Schwerter.</p>
                <p>Diese Helden reisten von Ort zu Ort, auf der Suche nach Abenteuern und besiegten gefährliche Feinde, darunter Banditen und feindliche Truppen. Sie befreiten ein Dorf von einem Drachen und besiegten einen bösen Herzog.</p>
                <p>Diese Legende wurde von Generation zu Generation überliefert, und die Vier Helden lebten als Symbole des Guten und des Sieges weiter.</p>
            </main>
            <Footer />
        </>

    )
}

export default profile
