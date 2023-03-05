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
        <title>Ma&rsquo;mun! Services</title>
        <meta name="description" content="Developemnt Services By Ma'mun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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