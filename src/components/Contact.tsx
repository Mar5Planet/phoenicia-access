import { Form, Input, Button, Typography, Modal } from 'antd'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const { Title, Paragraph } = Typography

export default function Contact() {
  const [form] = Form.useForm()
  const [modalVisible, setModalVisible] = useState(false)
  const { t } = useTranslation()

  const onFinish = (values: any) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    }

    emailjs
      .send(
        'service_ksuz62r',
        'template_hjcvx5f',
        templateParams,
        'Hxf7wJQYxmozc-evh'
      )
      .then(() => {
        form.resetFields()
        setModalVisible(true)
      })
      .catch((error) => {
        console.error('Email failed to send:', error)
      })
  }

  return (
    <>
      <div className="contact-container">
        <Title level={2}>{t('contact_title')}</Title>
        <Paragraph className="contact-subheading">{t('contact_subheading')}</Paragraph>

        <Form form={form} layout="vertical" onFinish={onFinish} className="contact-form">
          <Form.Item label={t('form.name')} name="name" rules={[{ required: true }]}>
            <Input placeholder={t('form.name_placeholder')} className="contact-input" />
          </Form.Item>

          <Form.Item label={t('form.email')} name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder={t('form.email_placeholder')} className="contact-input" />
          </Form.Item>

          <Form.Item label={t('form.message')} name="message" rules={[{ required: true }]}>
            <Input.TextArea
              rows={4}
              placeholder={t('form.message_placeholder')}
              className="contact-input"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-submit">
              {t('contact_us')}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title={t('contact_modal_title')}
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        centered
        footer={null}
      >
        <p>{t('contact_modal_message')}</p>
      </Modal>
    </>
  )
}