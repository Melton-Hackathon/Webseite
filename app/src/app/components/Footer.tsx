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
        <a href="/pages/rights/impressum">Impressum</a>
        <a href="/pages/rights/datarights">Datenschutz</a>
        <a href="/pages/rights/agb">AGB</a>
      </nav>
    </footer>
  )
}

export default Footer
