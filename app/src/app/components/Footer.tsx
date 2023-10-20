import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <h4>Kontaktinformationen</h4>
        <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
        <p>Telefon: (123) 456-7890</p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <div>
          <a href="https://github.com/dein-github-acc" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/dein-instagram-acc/" target="_blank">Instagram</a>
        </div>
      </div>

      <nav className="footer-nav">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="/agb">AGB</a>
      </nav>
    </footer>
  )
}

export default Footer
