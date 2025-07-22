import { Layout } from 'antd'
import './Navbar.css'

const { Header } = Layout

export default function Navbar() {
  return (
    <Header className="navbar-header">
      <img src="/logo.png" alt="Phoenicia Logo" className="navbar-logo" />

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

        {/* Google Translate Button */}
        <div className="translate-wrapper">
  <span className="translate-label">AR</span>
  <div id="google_translate_element" className="translate-button" />
</div>
      </nav>
    </Header>
  )
}