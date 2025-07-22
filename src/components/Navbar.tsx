import { Layout } from 'antd'
import { useState } from 'react'
import './Navbar.css'

const { Header } = Layout

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Header className="navbar-header">
      <div className="navbar-container">
        <img src="/logo.png" alt="Phoenicia Logo" className="navbar-logo" />

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </Header>
  )
}