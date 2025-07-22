import { Typography } from 'antd'
import './Services.css'

const { Title, Paragraph } = Typography

const services = [
  {
    title: 'Land sourcing',
    description: 'Strategic industrial & commercial plots selected for your needs.',
    image: '/land.jpg',
  },
  {
    title: 'Design & construction',
    description: 'Architectural plans and project management in compliance with local laws.',
    image: '/construction.jpg',
  },
  {
    title: 'Staff & admin setup',
    description: 'Hire and train local talent, handle permits, and establish administrative structure.',
    image: '/staff.jpg',
  },
]

export default function Services() {
  return (
    <section className="services" style={{ marginBottom: '6rem' }}>
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`service-item ${index % 2 === 1 ? 'reverse' : ''}`}
        >
          <div className="service-text">
            <Title level={3}>{service.title}</Title>
            <Paragraph className="paragraph">{service.description}</Paragraph>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </section>
  )
}