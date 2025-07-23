import { Typography, Button } from 'antd'
import './Hero.css'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

export default function Hero() {
  const { t } = useTranslation()



  return (
    <div className="hero-container">
      <picture className="hero-bg">
        <source srcSet="hero-small.webp" media="(max-width: 768px)" type="image/webp" />
        <source srcSet="hero.jpg" media="(min-width: 769px)" />
        <img src="hero.jpg" alt="Damascus Hero Background" className="hero-bg-img" />
      </picture>

      <div className="hero-overlay">
        <Title level={1}>{t('hero_title')}</Title>
        <Paragraph className="hero-subtext">
          {t('hero_subtext')}
        </Paragraph>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact">
            <Button type="primary" size="large" style={{ marginTop: '1rem', background: 'black', borderColor: 'black' }}>
              {t('contact_us')}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}