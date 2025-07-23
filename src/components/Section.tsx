import { Typography } from 'antd'
import './Section.css'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph, Text } = Typography

type SectionProps = {
  title: string
  paragraphs: string[]
  imageSrc?: string
  captionName?: string
  captionTitle?: string
}

export default function Section({
  title,
  paragraphs,
  imageSrc,
  captionName,
  captionTitle,
}: SectionProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <section className="section-block" dir={isRTL ? 'rtl' : 'ltr'}>
      <Title level={2} style={{ textAlign: isRTL ? 'right' : 'left' }}>
        {title}
      </Title>

      {paragraphs.map((text, idx) => (
        <Paragraph key={idx} className="paragraph" style={{ textAlign: isRTL ? 'right' : 'left' }}>
          <span
            dangerouslySetInnerHTML={{
              __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
            }}
          />
        </Paragraph>
      ))}

    {imageSrc && (
  <div className={`section-caption ${isRTL ? 'rtl' : ''}`}>
    <img src={imageSrc} alt={captionName} />
    <div className="caption-text">
      <Text strong>{captionName}</Text>
      <br />
      <Text italic type="secondary">
        {captionTitle}
      </Text>
    </div>
  </div>
)}
    </section>
  )
}