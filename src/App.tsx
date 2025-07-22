import { useEffect } from 'react'
import { Layout } from 'antd'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import TrustPoints from './components/TrustPoints'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const { Content } = Layout

const aboutParagraphs = [
  'Phoenicia Access Group connects foreign firms to real opportunities in Syria, managing land sourcing, architectural planning, staffing, and full project coordination with trusted U.S. standards.',
  'Damascus remains a highly relationship-driven market where many high-value properties and services are not publicly listed. Our long-standing network opens doors to vetted opportunities that would otherwise remain inaccessible to foreign firms.',
  'We help companies establish a presence in Syria by securing land, arranging architectural support, sourcing local staff, and handling full project administration.',
  'Based in the U.S. with deep local expertise through our partner in Damascus, we ensure your business launch is efficient, compliant, and secure.'
]

const partnerParagraphs = ['With over 40 years of experience in real estate development and architectural engineering, Eng. Hassan Mustafa brings deep, practical expertise to every project. His portfolio includes commercial hotels, restaurants, residential buildings, and various ventures across Damascus and its surrounding areas.',
'As Phoenicia Access Group’s local advisor, Eng. Mustafa has also collaborated with Gulf-based firms on hotel developments, providing trusted local guidance and technical leadership. His long-standing reputation gives our clients access to vetted land, reliable contractors, and opportunities that are often inaccessible through public channels.']

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <Layout style={{ background: '#fff' }}>
      <Navbar />
      <Content style={{ padding: '2rem', maxWidth: 1050, margin: '0 auto' }}>
        <div data-aos="fade-up">
          <Hero />
        </div>

        <div id="about" data-aos="fade-up">
          <Section title="About Us" paragraphs={aboutParagraphs} />
        </div>

        <div id="services" data-aos="fade-up">
          <Services />
        </div>

        <div data-aos="fade-up">
          <TrustPoints />
        </div>

        <div data-aos="fade-up">
          <Section
            title="Expert Local Partner"
            paragraphs={partnerParagraphs}
            imageSrc="hassan.jpg"
            captionName="Eng. Hassan Mustafa"
            captionTitle="Real Estate Advisor – Damascus & Rif Damascus"
          />
        </div>

        <div data-aos="fade-up">
          <Section
            title="How it Works: From U.S. to Damascus"
            paragraphs={[
              "**1. Consultation & Planning** – We start with a discovery call to assess your project and location needs.",
              "**2. Local Sourcing & Feasibility** – We propose real estate options and services through our Damascus-based advisor.",
              "**3. Project Launch** – You receive a turnkey plan including land, design, approvals, and staff onboarding.",
              "Most real estate and services in Damascus are still discovered through personal connections. Our trusted local network gives you access to opportunities that aren't publicly listed or advertised online."
            ]}
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