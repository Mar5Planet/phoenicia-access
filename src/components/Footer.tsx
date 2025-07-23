import { Layout, Typography } from 'antd'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const { Footer } = Layout
const { Text, Title } = Typography

export default function AppFooter() {
  const { t } = useTranslation()

  return (
    <Footer className="app-footer">
      <div className="footer-inner">
        <a href="#">
          <img src="logo.png" alt="Phoenicia Logo" className="footer-logo" />
        </a>
        <div className="footer-info">
          <Text type="secondary">
            © 2025 Phoenicia Access Group LLC | {t('footer.rights')}
          </Text>
        </div>

        <div className="footer-links">
          <div className="footer-nav">
            <Title level={5}>{t('footer.navigate')}</Title>
            <a href="#about">{t('about')}</a>
            <a href="#services">{t('services')}</a>
            <a href="#contact">{t('contact')}</a>
          </div>

          <div className="footer-contact">
            <Title level={5}>{t('footer.contact')}</Title>
            <Text type="secondary">info@phoeniciaaccess.com</Text>
          </div>
        </div>
      </div>
    </Footer>
  )
}