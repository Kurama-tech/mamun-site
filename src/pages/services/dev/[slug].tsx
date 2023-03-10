import { LayoutServices } from "@/components/layout";
import Data from "@/components/data/devservices";
import DevSection from "@/components/services/DevSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


export default function Services() {
    const router = useRouter();
    const { slug } = router.query
    const [serviceid, setserviceid] = useState(0)

    useEffect(() => {
        if(!slug) {
          return;
        }
        setserviceid(Number(slug))
      }, [slug])

    return (
    <>
        <Head>
        <title>Ma&rsquo;mun! | Custom Software Development, App Development, UI/UX Designs, Managed DevOps Services</title>
        <meta name="description" content="Services By Mamun" />
        <meta name="description" content="Looking for the best web design services? Mamun provides high-quality web design, development, and optimization services that help businesses grow."></meta>
        <meta name="description" content="Mamun provides customized software development services for businesses of all sizes. Our team of experts creates high-quality, scalable, and secure software solutions that help you streamline your operations and increase your ROI." />
        <meta name="description" content="Mamun provides upgrade legacy software services that help businesses modernize and optimize their existing software systems. Our team of experts works closely with clients to identify legacy systems, evaluate their needs, and create customized plans for upgrading and modernizing their software."></meta>
        <meta name="description" content="Mamun provides managed DevOps services that help businesses streamline their operations, increase efficiency, and reduce costs. Our team of experts creates customized DevOps solutions that are tailored to your business needs and goals."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mamun provides reliable on-premises hosting services for businesses that require greater control and security over their hosting environments. Our team of experts delivers customized hosting solutions that meet your business needs and ensure maximum uptime and reliability."></meta>
        <meta name="description" content="Mamun provides high-quality UI/UX design services that help businesses create engaging, user-friendly, and aesthetically pleasing digital experiences. Our team of experts uses cutting-edge design tools and techniques to deliver designs that are optimized for user experience and conversion rates."></meta>
        <meta name="description" content="Mamun provides professional app development services using Flutter and React Native technologies. Our team of experts creates high-quality, cross-platform mobile apps that are optimized for performance and user experience."></meta>
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <LayoutServices>
            <DevSection service={Data[serviceid]} />
        </LayoutServices>
    </>)
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: '0' }}, 
        { params: { slug: '1' }}, 
        { params: { slug: '2' }},  
        { params: { slug: '3' }},  
        { params: { slug: '4' }}, 
        { params: { slug: '5' }}],
      fallback: false, // can also be true or 'blocking'
    }
}