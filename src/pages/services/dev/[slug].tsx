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