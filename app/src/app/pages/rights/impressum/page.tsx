import React from 'react'

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const impressum = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>Impressum - Melton Game</h1>
                    <div className="info">
                        <p><strong>Entwickler und Betreiber:</strong></p>
                        <p>Fiktive Spiele GmbH</p>
                        <p>Musterstraße 123</p>
                        <p>12345 Musterstadt</p>
                        <p>Telefon: (01234) 567890</p>
                        <p>E-Mail: <a href="mailto:info@melton-game.com">info@melton-game.com</a></p>
                        <p>Website: <a href="http://www.melton-game.com">www.melton-game.com</a></p>
                        <p>Registergericht: Amtsgericht Musterstadt</p>
                        <p>Registernummer: HRB 54321</p>
                        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE987654321</p>
                        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
                        <p>Max Mustermann</p>
                        <p>Musterstraße 123</p>
                        <p>12345 Musterstadt</p>
                        <p><strong>Unterstützung und Kontakt:</strong></p>
                        <p>Bei Fragen oder Problemen kontaktieren Sie bitte unseren Support:</p>
                        <p>E-Mail: <a href="mailto:support@melton-game.com">support@melton-game.com</a></p>
                        <p><strong>Online-Streitbeilegung (OS) gemäß Art. 14 Abs. 1 ODR-VO:</strong></p>
                        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Sie finden diese Plattform unter https://ec.europa.eu/consumers/odr/.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default impressum