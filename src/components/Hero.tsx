import { Typography, Button } from 'antd'
import './Hero.css'

const { Title, Paragraph } = Typography

export default function Hero() {
  return (
    <div className="hero-container" style={{ marginBottom: '6rem' }}>
      <div className="hero-overlay">
        <Title level={1}>Unlock Hidden Opportunities in Damascus.</Title>
        <Paragraph className="hero-subtext">
        We launch your business in Damascus with land, design, and on-the-ground support you won’t find online.
        </Paragraph>
        <a href="#contact">
        <Button type="primary" size="large" style={{ marginTop: '1rem', background: 'black', borderColor: 'black' }}>
          Contact Us
        </Button>
        </a>
      </div>
    </div>
  )
}
