import Head from 'next/head'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import About from '@/components/about'
import Services from '@/components/services'
import Protfolio from '@/components/portfolio'
import TrustedBy from '@/components/trustedby'
import Contact from '@/components/contact'
import ContactForm from '@/components/contactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ma&rsquo;mun! | Custom Software Development, App Development, UI/UX Designs, Managed DevOps Services</title>
        <meta name="description" content="Mamun LLC is a UAE-based company that provides custom software development, app development, UI/UX designs, managed DevOps services, and on-premises hosting. With over 10 years of experience and a team of 10 experts, we help businesses of all sizes streamline their operations, increase efficiency, and improve user experience. Contact us for a free consultation." />
        <meta name="keywords" content="mamun, ma'mun, software dev, website dev cheap software,custom software development, app development, UI/UX designs, managed DevOps services, on-premises hosting, UAE, Mamun" />
        <meta name="author" content="Mamun" />
        <meta name="keywords" content="User interface design,
        User experience design,
        UX research,
        Wireframing,
        Prototyping,
        Visual design,
        Graphic design,
        Branding" />
        <meta name="keywords" content="Mobile app development
        iOS app development,
        Android app development,
        Cross-platform app development,
        Hybrid app development,
        Flutter app development,
        React Native app development,
        App design" />
        <meta name="keywords" content="DevOps consulting
        Cloud infrastructure,
        Continuous integration,
        Continuous delivery,
        Deployment automation,
        Monitoring and logging,
        Scalability,
        Security" />
        <meta name="keywords" content="Private hosting
          Dedicated hosting
          Managed hosting
          Cloud hosting
          Virtual private servers
          Data center solutions
          Website hosting
          Web hosting services" />
          <meta name="keywords" content="IT solutions, IT services, custom software development, app development, UI/UX designs, managed DevOps services, on-premises hosting, Mamun LLC"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div id='home'>
        <Hero />
        </div>
        <div id='services'>
        <Services />
        </div>
        <div id='portfolio'>
          <Protfolio />
        </div>
        <div id='about'>
        <About />
        {/* <TrustedBy /> */}
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <div id='talk'>
          <ContactForm />
        </div>
      </Layout>
    </>
  )
}
