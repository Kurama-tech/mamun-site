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
        <title>Ma&rsquo;mun! on prem Services</title>
        <meta name="description" content="On Prem Services By Mamun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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