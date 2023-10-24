"use client"

import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const profile = () => {

    // Annahme: Sie haben Informationen über den Benutzer und die Charaktere
    const user = {
        username: 'Spieler123',
        lastOnline: 'vor 2 Stunden',
        passwordChange: 'Passwort ändern',
    };

    const characters = [
        { name: 'Charakter 1', level: 5 },
        { name: 'Charakter 2', level: 7 },
        { name: 'Charakter 3', level: 3 },
        // Fügen Sie die restlichen Charaktere hinzu
    ];

    return (
        <>
            <Header />
            <main>
                <div className="profile">
                    <h1>Mein Profil</h1>
                    <p>
                        Benutzername: {user.username}<br />
                        Zuletzt online: {user.lastOnline}<br />
                        <a href="#">{user.passwordChange}</a>
                    </p>

                    <h2>Meine Charaktere</h2>
                    <ul className="character-list">
                        {characters.map((character, index) => (
                            <li key={index}>
                                {character.name} - Level {character.level}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default profile