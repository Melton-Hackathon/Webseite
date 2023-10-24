"use client"

import React, { useRef } from 'react';
import LoginClass from '../../../shared/login/login.class';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Login = () => {
    const l = new LoginClass();
    const usernameRef = useRef<HTMLInputElement | null>(null); // Typ HTMLInputElement oder null
    const passwordRef = useRef<HTMLInputElement | null>(null); // Typ HTMLInputElement oder null

    const handleLogin = () => {
        const username = usernameRef.current?.value; // Null-Prüfung hinzugefügt
        const password = passwordRef.current?.value; // Null-Prüfung hinzugefügt

        if (username && password) {
            l.login(username, password);
            console.log(sessionStorage.getItem('melton-login-session')?.valueOf());
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="login-container">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label>Benutzername</label>
                            <input
                                type="text"
                                ref={usernameRef}
                                name="username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Passwort</label>
                            <input
                                type="password"
                                ref={passwordRef}
                                name="password"
                                required
                            />
                        </div>
                        <button
                            type='button'
                            className="login-button"
                            onClick={handleLogin}
                        >
                            Anmelden
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Login;
