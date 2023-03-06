import { LayoutServices } from "@/components/layout";
import Data from "@/components/data/onpremservices";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import OnPrem from "@/components/services/OnPrem";


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
        <meta name="description" content="On Prem Services By Mamun" />
        <meta name="description" content="Mamun provides reliable on-premises hosting services for businesses that require greater control and security over their hosting environments. Our team of experts delivers customized hosting solutions that meet your business needs and ensure maximum uptime and reliability."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        </Head>
        <LayoutServices>
            <OnPrem service={Data[serviceid]}/>
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
      paths: [{ params: { slug: '0' }}],
      fallback: false, // can also be true or 'blocking'
    }
}