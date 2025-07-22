import { Typography } from 'antd'
import './Section.css'

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
  return (
    <section className="section-block">
      <Title level={2}>{title}</Title>
      {paragraphs.map((text, idx) => (
       <Paragraph key={idx} className="paragraph">
  <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
</Paragraph>
      ))}

      {imageSrc && (
        <div className="section-caption">
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