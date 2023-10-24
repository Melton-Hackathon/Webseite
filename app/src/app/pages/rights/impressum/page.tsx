import React from 'react'

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const impressum = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Impressum</h1>
                <p>Angaben gemäß § 5 TMG</p>
                <p>Levin Zimmermann<br />Underbüel 1<br />6016 Hellbühl</p><br />
                <h2>Kontakt</h2>
                <p>Telefon: 079 270 51 12<br />E-Mail: levin@melton.wicki.sbs</p>
            </main>
            <Footer />
        </>
    )
}

export default impressum