import { useEffect } from 'react'
import { Layout } from 'antd'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import TrustPoints from './components/TrustPoints'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const { Content } = Layout

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <Layout style={{ background: '#fff' }}>
      <Navbar />
      <Content style={{ padding: '2rem', maxWidth: 1050, margin: '0 auto' }}>
        <div data-aos="fade-up">
          <Hero />
        </div>

        <div id="about" data-aos="fade-up">
          <Section
            title={t('about_us_title')}
            paragraphs={t('about_us_paragraphs', { returnObjects: true }) as string[]}
          />
        </div>

        <div id="services" data-aos="fade-up">
          <Services />
        </div>

        <div data-aos="fade-up">
          <TrustPoints />
        </div>

        <div data-aos="fade-up">
          <Section
            title={t('local_partner_title')}
            paragraphs={t('local_partner_paragraphs', { returnObjects: true }) as string[]}
            imageSrc="hassan.jpg"
            captionName={t('hassan_name')}
            captionTitle={t('hassan_title')}
          />
        </div>

        <div data-aos="fade-up">
          <Section
            title={t('how_it_works_title')}
            paragraphs={t('how_it_works_paragraphs', { returnObjects: true }) as string[]}
            imageSrc="signature.png"
          />
        </div>

        <div id="contact" data-aos="fade-up">
          <Contact />
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App