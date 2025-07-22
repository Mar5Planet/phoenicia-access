import { Layout, Typography } from 'antd'
import './Footer.css'

const { Footer } = Layout
const { Text, Title } = Typography

export default function AppFooter() {
  return (
    <Footer className="app-footer">
      <div className="footer-inner">
        <a href="#">
            <img src="logo.png" alt="Phoenicia Logo" className="footer-logo" />
        </a>
        <div className="footer-info">
          <Text type="secondary">
            © 2025 Phoenicia Access Group LLC | All rights reserved.
          </Text>
        </div>

        <div className="footer-links">
          <div className="footer-nav">
            <Title level={5}>Navigate</Title>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <Title level={5}>Contact</Title>
            <Text type="secondary">info@phoeniciaaccess.com</Text>
          </div>
        </div>
      </div>
    </Footer>
  )
}
