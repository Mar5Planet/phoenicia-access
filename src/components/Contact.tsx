import { Form, Input, Button, Typography, Modal } from 'antd'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import './Contact.css'

const { Title, Paragraph } = Typography

export default function Contact() {
  const [form] = Form.useForm()
  const [modalVisible, setModalVisible] = useState(false)

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
        <Title level={2}>Contact Phoenicia Access Group</Title>
        <Paragraph className="contact-subheading">We’re here to help you.</Paragraph>

        <Form form={form} layout="vertical" onFinish={onFinish} className="contact-form">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Jane Smith" className="contact-input" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="jane@doe.com" className="contact-input" />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true }]}>
            <Input.TextArea rows={4} placeholder="Your message..." className="contact-input" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-submit">
              Contact Us
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="Thank you!"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        centered
        footer={null}
      >
        <p>We received your email and will get back to you shortly.</p>
      </Modal>
    </>
  )
}