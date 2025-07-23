import { CheckCircleOutlined, HomeOutlined, SafetyOutlined, TeamOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import './TrustPoints.css'

const { Text } = Typography

export default function TrustPoints() {
  const { t } = useTranslation()

  const points = [
    {
      icon: <TeamOutlined />,
      label: t('trust_points.direct_access'),
    },
    {
      icon: <HomeOutlined />,
      label: t('trust_points.trusted_network'),
    },
    {
      icon: <CheckCircleOutlined />,
      label: t('trust_points.years_experience'),
    },
    {
      icon: <SafetyOutlined />,
      label: t('trust_points.us_compliance'),
    },
  ]

  return (
    <section className="trust-points" style={{ marginBottom: '10rem' }}>
      {points.map((point) => (
        <div className="trust-point" key={point.label}>
          <div className="icon">{point.icon}</div>
          <Text strong>{point.label}</Text>
        </div>
      ))}
    </section>
  )
}