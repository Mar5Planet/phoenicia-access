import { Layout, Button } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

const { Header } = Layout

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
  }

  return (
    <Header className="navbar-header">
      <div className="navbar-container">
        <img src="/logo.png" alt="Phoenicia Logo" className="navbar-logo" />

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t('about')}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t('services')}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</a>
        </nav>

        <div className="navbar-actions">
          <Button
            type="text"
            onClick={toggleLang}
            className="lang-toggle-btn"
          >
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </Button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </Header>
  )
}