import { Typography } from 'antd'
import './Services.css'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      title: t('services_menu.land_title'),
      description: t('services_menu.land_desc'),
      image: 'land.jpg',
    },
    {
      title: t('services_menu.design_title'),
      description: t('services_menu.design_desc'),
      image: 'construction.jpg',
    },
    {
      title: t('services_menu.staff_title'),
      description: t('services_menu.staff_desc'),
      image: 'staff.jpg',
    },
  ]

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