import { CheckCircleOutlined, HomeOutlined, SafetyOutlined, TeamOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import './TrustPoints.css'

const { Text } = Typography

const points = [
  {
    icon: <TeamOutlined />,
    label: 'Direct access',
  },
  {
    icon: <HomeOutlined />,
    label: 'Trusted network',
  },
  {
    icon: <CheckCircleOutlined />,
    label: '40+ years experience',
  },
  {
    icon: <SafetyOutlined />,
    label: 'U.S. compliance',
  },
]

export default function TrustPoints() {
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
